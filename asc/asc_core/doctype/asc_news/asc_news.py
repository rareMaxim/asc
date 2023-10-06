# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

from math import ceil

import frappe
from frappe import _
from frappe.utils import (
    cint,
    get_fullname,
    global_date_format,
    markdown,
    sanitize_html,
    strip_html_tags,
    today,
)
from frappe.website.utils import (
    clear_cache,
    find_first_image,
    get_comment_list,
    get_html_content_based_on_type,
)
from frappe.website.website_generator import WebsiteGenerator


class ASCNews(WebsiteGenerator):
    @frappe.whitelist()
    def make_route(self):
        if not self.route:
            return (
                # frappe.db.get_value("Blog Category", self.blog_category, "route")
                "news"
                + "/"
                + self.scrub(self.title)
            )

    def set_read_time(self):
        if self.content:
            content = self.content
            # if self.content_type == "Markdown":
            # 	content = markdown(self.content_md)

            total_words = len(strip_html_tags(content).split())
            self.read_time = ceil(total_words / 250)

    def validate(self):
        super().validate()
        if self.published and not self.published_on:
            self.published_on = today()
        self.set_read_time()

    def get_context(self, context):
        # this is for double precaution. usually it wont reach this code if not published
        if not cint(self.published):
            raise Exception("This blog has not been published yet!")

        context.no_breadcrumbs = True
        context.first_image = self.cover_image
        context.updated = global_date_format(self.published_on)
        context.social_links = self.fetch_social_links_info()
        context.content = self.content
        context.description = (
            self.meta_description or strip_html_tags(context.content[:140])
        )

        context.metatags = {
            "name": self.meta_title,
            "description": context.description,
        }

        # if meta image is not present, then first image inside the blog will be set as the meta image
        image = find_first_image(context.content)
        context.metatags["image"] = self.meta_image or image or None
        self.load_comments(context)
        self.load_likes(context)

        context.parents = [
            {"name": _("Home"), "route": "/"},
            {"name": "News", "route": "/news"},
            # {"label": context.category.title, "route": context.category.route},
        ]
        
    def load_comments(self, context):
        context.comment_list = get_comment_list(self.doctype, self.name)
        if not context.comment_list:
            context.comment_count = 0
        else:
            context.comment_count = len(context.comment_list) 
    
    def load_likes(self, context):
        user = frappe.session.user
        filters = {
			"comment_type": "Like",
			"reference_doctype": self.doctype,
			"reference_name": self.name,
		}
        context.like_count = frappe.db.count("Comment", filters) or 0
        filters["comment_email"] = user
        if user == "Guest":
            filters["ip_address"] = frappe.local.request_ip
            context.like = frappe.db.count("Comment", filters) or 0
   
    def fetch_social_links_info(self):

        url = frappe.local.site + "/" + self.route

        return [
            {
                "icon": "twitter",
                "link": "https://twitter.com/intent/tweet?text=" + self.title + "&url=" + url,
            },
            {
                "icon": "facebook",
                "link": "https://www.facebook.com/sharer.php?u=" + url,
            },
            {
                "icon": "linkedin",
                "link": "https://www.linkedin.com/sharing/share-offsite/?url=" + url,
            },
            {
                "icon": "envelope",
                "link": "mailto:?subject=" + self.title + "&body=" + url,
            },
        ]
        



def get_news_list(doctype, txt, filters, limit_start, limit_page_length=20, order_by=None):
    from frappe.www.list import get_list

    user = frappe.session.user
    ignore_permissions = True
    if not filters:
        filters = []
    # filters.append(("Address", "owner", "=", user))

    return get_list(
        doctype, txt, filters, limit_start, limit_page_length, ignore_permissions=ignore_permissions
    )


def get_list_context(context=None):
    return {
        "title": _("News"),
        "get_list": get_news_list,
        # "row_template": "templates/asc_news_row.html",
        "no_breadcrumbs": False,
        "order_by": "published_on ASC",
    }
