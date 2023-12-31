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
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        category: DF.Link | None
        content: DF.TextEditor | None
        content_html: DF.HTMLEditor | None
        content_md: DF.MarkdownEditor | None
        content_type: DF.Literal["Markdown", "Rich Text", "HTML"]
        cover_image: DF.AttachImage | None
        disable_comments: DF.Check
        disable_likes: DF.Check
        meta_description: DF.SmallText | None
        meta_title: DF.Data | None
        published: DF.Check
        published_on: DF.Date | None
        read_time: DF.Int
        route: DF.Data | None
        title: DF.Data | None
    # end: auto-generated types

    @frappe.whitelist()
    def make_route(self):
        if not self.route:
            return (
                frappe.db.get_value("ASC News Category", self.category, "route")
                + "/"
                + self.scrub(self.title)
            )

    def validate(self):
        super().validate()

        self.meta_title = self.meta_title[:60] if self.meta_title else self.title[:60]
        if not self.meta_description:
            self.meta_description = self.content[:140]
        else:
            self.meta_description = self.meta_description[:140]

        if self.published and not self.published_on:
            self.published_on = today()

        self.set_read_time()

    def on_update(self):
        super().on_update()
        clear_cache("writers")

    def get_context(self, context):
        # this is for double precaution. usually it wont reach this code if not published
        if not self.published:
            raise AttributeError("This News has not been published yet!")

        context.no_breadcrumbs = False

        context.updated = global_date_format(self.published_on)
        context.cover_image = self.cover_image
        context.social_links = self.fetch_social_links_info()
        context.content = get_html_content_based_on_type(
            self, "content", self.content_type
        )
        # if meta description is not present, then blog intro or first 140 characters of the blog will be set as description
        context.description = self.meta_description or strip_html_tags(
            context.content[:140]
        )

        context.metatags = {
            "name": self.meta_title,
            "description": context.description,
            "image": self.cover_image or None,
        }

        self.load_comments(context)
        self.load_likes(context)

        context.category = frappe.db.get_value(
            "ASC News Category", context.doc.category, ["title", "route"], as_dict=1
        )

        context.parents = [
            {"name": _("Home"), "route": "/"},
            # {"name": "News", "route": "/news"},
            {"label": context.category.title, "route": context.category.route},
        ]

        context.guest_allowed = frappe.db.get_single_value(
            "ASC News Settings", "allow_guest_to_comment"
        )

    def fetch_social_links_info(self):
        if not frappe.db.get_single_value(
            "ASC News Settings", "enable_social_sharing", cache=True
        ):
            return []
        url = f"{frappe.local.site}/{self.route}"

        return [
            {
                "icon": "twitter",
                "link": "https://twitter.com/intent/tweet?text="
                + self.title
                + "&url="
                + url,
            },
            {
                "icon": "facebook",
                "link": f"https://www.facebook.com/sharer.php?u={url}",
            },
            {
                "icon": "linkedin",
                "link": f"https://www.linkedin.com/sharing/share-offsite/?url={url}",
            },
            {
                "icon": "envelope",
                "link": f"mailto:?subject={self.title}&body={url}",
            },
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

    def set_read_time(self):
        content = self.content or self.content_html or ""
        if self.content_type == "Markdown":
            content = markdown(self.content_md)
        total_words = len(strip_html_tags(content).split())
        self.read_time = ceil(total_words / 250)


def get_news_list(doctype, txt=None, filters=None, limit_start=0, limit_page_length=20, order_by=None):
    if filters is None:
        filters = {}
    from frappe.www.list import get_list

    ignore_permissions = True
    if not filters:
        filters = {}
    filters.update({"published": 1})

    return get_list(
        doctype,
        fields=["title", "route", "cover_image", "published_on", "read_time"],
        limit_start=limit_start,
        limit_page_length=limit_page_length,
        ignore_permissions=ignore_permissions,
        filters=filters,
        txt=txt,
        order_by=order_by,
    )


def get_news_categories():
    from pypika import Order
    from pypika.terms import ExistsCriterion

    post, category = frappe.qb.DocType("ASC News"), frappe.qb.DocType(
        "ASC News Category"
    )
    return (
        frappe.qb.from_(category)
        .select(category.name, category.route, category.title)
        .where(
            (category.published == 1)
            & ExistsCriterion(
                frappe.qb.from_(post)
                .select("name")
                .where(
                    (post.published == 1) & (post.category == category.name)
                )
            )
        )
        .orderby(category.title, order=Order.asc)
        .run(as_dict=1)
    )


def get_list_context(context=None):
    list_context = frappe._dict(
        news_title="Публікації",
        get_list=get_news_list,
        # "row_template": "templates/asc_news_row.html",
        no_breadcrumbs=False,
        order_by="published_on DESC",
    )
    if category_name := frappe.utils.escape_html(
        frappe.local.form_dict.blog_category or frappe.local.form_dict.category
    ):
        category = frappe.get_doc("ASC News Category", category_name)
        list_context.news_title = category.title
    blog_settings = frappe.get_doc("ASC News Settings").as_dict(no_default_fields=True)
    list_context.update(blog_settings)
    news_settings = frappe.get_doc("ASC News Settings").as_dict(no_default_fields=True)
    list_context.update(news_settings)
    if news_settings.browse_by_category:
        list_context.news_categories = get_news_categories()
    list_context.parents = [{"name": _("Home"), "route": "/"}]
    return list_context
