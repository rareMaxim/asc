# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

import json
import requests
import frappe
from frappe.website.website_generator import WebsiteGenerator


@frappe.whitelist()
def get_from_api(asc_code):
    url = f"https://guide.diia.gov.ua/api/v1/asc/detail/{asc_code}/"
    headers = {"content-type": "application/json"}
    params = {
        "format": "json",
        "accept": "application/json",
    }
    r = requests.get(url, headers=headers, params=params)
    jsonStringA = r.text
    #
    url = "https://guide.diia.gov.ua/asc/download/json/"
    headers = {"content-type": "application/json"}
    params = {
        "format": "json",
        "accept": "application/json",
    }
    r = requests.get(url, headers=headers, params=params)

    asc = json.loads(r.text)["entries"]
    for LInfo in asc:
        if LInfo["code"] == int(asc_code):
            jsonStringB = json.dumps(LInfo)

    jsonMerged = {**json.loads(jsonStringB), **json.loads(jsonStringA)}
    return json.dumps(jsonMerged)


class ASCOffice(WebsiteGenerator):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        add_serv: DF.Check
        address: DF.SmallText | None
        asc_id: DF.Data | None
        bank_branc: DF.Check
        braille_mat: DF.Check
        bus_100: DF.Check
        dis_sanit: DF.Check
        disability: DF.Check
        e_registr: DF.Check
        feedback_url: DF.Data | None
        formation_form: DF.Data | None
        free_parking: DF.Check
        free_wifi: DF.Check
        latitude: DF.Float
        longitude: DF.Float
        onl_consul: DF.Data | None
        pandus: DF.Check
        pay_card: DF.Check
        pay_terminal: DF.Check
        pram_place: DF.Check
        published: DF.Check
        route: DF.Data | None
        sanit_room: DF.Check
        self_serv: DF.Check
        square_total: DF.Float
        status: DF.Literal["\u0414\u0456\u044e\u0447\u0438\u0439", "\u0422\u0438\u043c\u0447\u0430\u0441\u043e\u0432\u043e \u0437\u0430\u043a\u0440\u0438\u0442\u0438\u0439", "\u0417\u0430\u043a\u0440\u0438\u0442\u0438\u0439 \u043d\u0430\u0437\u0430\u0432\u0436\u0434\u0438"]
        tel_consul: DF.Data | None
        timetable: DF.SmallText | None
        title: DF.Data | None
        workers_total: DF.Int
    # end: auto-generated types
    pass


def get_list(doctype, txt, filters, limit_start, limit_page_length=20, order_by=None):
    from frappe.www.list import get_list

    user = frappe.session.user
    ignore_permissions = True
    if not filters:
        filters = []
    filters.append(("ASC Office", "published", "=", 1))
    return frappe.get_all(
        doctype,
        fields=["title", "status", "address", "tel_consul", "onl_consul"],
        limit_start=limit_start,
        limit_page_length=limit_page_length,
        ignore_permissions=ignore_permissions,
        filters=filters,
        order_by=order_by,
    )


def get_list_context(context=None):
    return {
        "title": "Офіси ЦНАП",
        "get_list": get_list,
        # "row_template": "templates/asc_news_row.html",
        "no_breadcrumbs": False,
        # "order_by": "published_on ASC",
    }
