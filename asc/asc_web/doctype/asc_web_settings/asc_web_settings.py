# Copyright (c) 2024, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator


class ASCWebSettings(WebsiteGenerator):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from asc.asc_web.doctype.asc_web_footer_items.asc_web_footer_items import ASCWebFooterItems
		from asc.asc_web.doctype.asc_web_social_links.asc_web_social_links import ASCWebSocialLinks
		from frappe.types import DF

		asc_title: DF.Data | None
		left_items: DF.Table[ASCWebFooterItems]
		route: DF.Data | None
		table_social_links: DF.Table[ASCWebSocialLinks]
	# end: auto-generated types

	pass
