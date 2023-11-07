# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.utils import clear_cache
from frappe.website.website_generator import WebsiteGenerator


class ASCNewsCategory(WebsiteGenerator):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        published: DF.Check
        route: DF.Data | None
        title: DF.Data | None
    # end: auto-generated types
    def autoname(self):
        # to override autoname of WebsiteGenerator
        self.name = self.scrub(self.title)

    def on_update(self):
        clear_cache()

    def set_route(self):
        # Override route since it has to been templated
        self.route = f"news/{self.name}"
