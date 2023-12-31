# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator


class ASCDiiaSector(WebsiteGenerator):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        id: DF.Data | None
        published: DF.Check
        route: DF.Data | None
        thematic_area: DF.Link | None
        title: DF.Data | None
    # end: auto-generated types
    pass


def get_services_list(
    doctype, txt, filters, limit_start, limit_page_length=5, order_by=None
):
    from frappe.www.list import get_list

    ignore_permissions = True
    if not filters:
        filters = {}
    filters.update({"published": 1})
    return get_list(
        doctype,
        fields=["title", "keyword", "name", "route"],
        limit_start=limit_start,
        limit_page_length=limit_page_length,
        ignore_permissions=ignore_permissions,
        filters=filters,
        txt=txt,
        order_by=order_by,
    )


def get_services(sector):
    text = None
    # this is for double precaution. usually it wont reach this code if not published
    if not (sector.name):
        raise PermissionError("This section has not been published yet!")
    filters = {"sector": sector.name}
    limit_start = 0
    limit_page_length = 20
    order_by = "title ASC"
    return get_services_list(
        "ASC Service", text, filters, limit_start, limit_page_length, order_by
    )


def get_sector_list(
    doctype, txt, filters, limit_start, limit_page_length=5, order_by=None
):
    from frappe.www.list import get_list

    ignore_permissions = True
    if not filters:
        filters = {}
    filters.update({"published": 1})
    result = get_list(
        doctype,
        fields=["title", "route", "name"],
        limit_start=limit_start,
        limit_page_length=limit_page_length,
        ignore_permissions=ignore_permissions,
        filters=filters,
        txt=txt,
        order_by=order_by,
    )
    empty_sectors = []
    for sector in result:
        sector.services = get_services(sector)
        if len(sector.services) < 1:
            empty_sectors.append(sector)
    for sector in empty_sectors:
        result.remove(sector)
    return result


def get_list_context(context=None):
    from frappe import _
    import frappe

    list_context = frappe._dict(
        title="Меню послуг",
        get_list=get_sector_list,
        # "row_template": "templates/asc_news_row.html",
        no_breadcrumbs=False,
        order_by="title ASC",
    )

    list_context.parents = [{"name": _("Home"), "route": "/"}]
    if "thematic_area" not in frappe.form_dict.keys():
        raise PermissionError("This section has not been published yet!")
    if frappe.form_dict["thematic_area"]:
        list_context.parents.append(
            {"name": _("Меню послуг"), "route": "/thematic_area"}
        )
        list_context.title = frappe.get_value(
            "ASC Diia Thematic Area", frappe.form_dict["thematic_area"], "title"
        )
    return list_context
