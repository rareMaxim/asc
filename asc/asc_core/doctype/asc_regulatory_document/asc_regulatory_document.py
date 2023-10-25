# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
import frappe
from frappe.website.website_generator import WebsiteGenerator


class ASCRegulatoryDocument(WebsiteGenerator):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        convocation: DF.Data | None
        date: DF.Date | None
        file: DF.Attach | None
        number: DF.Data | None
        published: DF.Check
        route: DF.Data | None
        session: DF.Data | None
        title: DF.Data | None
    # end: auto-generated types

    @frappe.whitelist()
    def make_route(self):
        if not self.route:
            return (self.scrub(
                str(self.convocation)+"-" +
                str(self.session)+"-" +
                str(self.number))
            )
