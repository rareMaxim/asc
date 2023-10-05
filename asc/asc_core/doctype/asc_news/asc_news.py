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
		# context.social_links = self.fetch_social_links_info()
		context.content = self.content
		context.parents = [
			{"name": _("Home"), "route": "/"},
			{"name": "News", "route": "/news"},
			# {"label": context.category.title, "route": context.category.route},
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
	
def get_list_context(context = None):
	return {
		"title": _("News"),
		"get_list": get_news_list,
		# "row_template": "templates/asc_news_row.html",
		"no_breadcrumbs": False,
		"order_by" : "published_on ASC",
	}
	
	

