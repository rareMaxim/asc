# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe

from frappe.website.website_generator import WebsiteGenerator


class ASCDiiaThematicArea(WebsiteGenerator):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        comment: DF.SmallText | None
        end_at: DF.Date | None
        id: DF.Data | None
        published: DF.Check
        route: DF.Data | None
        start_at: DF.Date | None
        title: DF.Data | None
    # end: auto-generated types
    pass


def get_thematic_area_list(doctype, txt, filters, limit_start, limit_page_length=5, order_by=None):
    from frappe.www.list import get_list
    ignore_permissions = True
    if not filters:
        filters = {}
    filters.update({"published": 1})
    result = get_list(doctype, fields=[
        "title", "name",  "comment",],
        limit_start=limit_start,
        limit_page_length=limit_page_length,
        ignore_permissions=ignore_permissions,
        filters=filters,
        txt=txt,
        order_by=order_by)
    return result


def get_list_context(context=None):
    from frappe import _
    import frappe

    list_context = frappe._dict(
        title="Меню послуг",
        get_list=get_thematic_area_list,
        # "row_template": "templates/asc_news_row.html",
        no_breadcrumbs=False,
        order_by="title ASC",
    )
    list_context.parents = [{"name": _("Home"), "route": "/"}]
    return list_context
