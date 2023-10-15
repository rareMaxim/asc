# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.utils import clear_cache
from frappe.website.website_generator import WebsiteGenerator


class ASCNewsCategory(WebsiteGenerator):
    def autoname(self):
        # to override autoname of WebsiteGenerator
        self.name = self.scrub(self.title)

    def on_update(self):
        clear_cache()

    def set_route(self):
        # Override route since it has to been templated
        self.route = "news/" + self.name
