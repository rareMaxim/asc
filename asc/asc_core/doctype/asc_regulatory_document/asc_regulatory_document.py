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
            return 'regulatory/'+(self.scrub(

                str(self.convocation)+"-" +
                str(self.session)+"-" +
                str(self.number))
            )
            
    def get_context(self, context):
        context.no_breadcrumbs = False
        context.parents = [
            {"name": frappe._("Home"), "route": "/"},
            {"name": "Регуляторні документи", "route": "/regulatory"},
            # {"label": context.category.title, "route": context.category.route},
        ]
        return context


def get_regulatory_list(doctype, txt, filters, limit_start, limit_page_length=2, order_by=None):
    from frappe.www.list import get_list
    ignore_permissions = True
    if not filters:
        filters = {}
    filters.update({"published": 1})

    # filters.popitem()
    # result = get_list(
    #     doctype, txt, filters, limit_start, limit_page_length, ignore_permissions=ignore_permissions, order_by=order_by
    # )

    result = get_list(doctype, fields=[
        "title", "route", "convocation", "session", "date", "number"],
        limit_start=limit_start,
        limit_page_length=limit_page_length,
        ignore_permissions=ignore_permissions,
        filters=filters,
        txt=txt,
        order_by=order_by)
    print(limit_start, limit_page_length)
    return result


def get_list_context(context=None):
    list_context = frappe._dict(
        title="Регуляторні документи",
        get_list=get_regulatory_list,
        # "row_template": "templates/asc_news_row.html",
        no_breadcrumbs=False,
        order_by="date DESC",
    )
    list_context.parents = [{"name": frappe._("Home"), "route": "/"}]
    return list_context
