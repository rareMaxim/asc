# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

import json
import requests
import frappe
from frappe.website.website_generator import WebsiteGenerator


@frappe.whitelist()
def get_from_api(asc_code):
    url = f'https://guide.diia.gov.ua/api/v1/asc/detail/{asc_code}/'
    headers = {'content-type': 'application/json'}
    params = {
        'format': 'json',
        'accept': 'application/json',
    }
    r = requests.get(url, headers=headers, params=params)
    jsonStringA = r.text
    #
    url = f'https://guide.diia.gov.ua/asc/download/json/'
    headers = {'content-type': 'application/json'}
    params = {
        'format': 'json',
        'accept': 'application/json',
    }
    r = requests.get(url, headers=headers, params=params)

    asc = json.loads(r.text)['entries']
    for LInfo in asc:
        if LInfo['code'] == int(asc_code):
            jsonStringB = json.dumps(LInfo)

    jsonMerged = {**json.loads(jsonStringB), **json.loads(jsonStringA)}

    print(jsonMerged)
    data_str = json.dumps(jsonMerged)

    return str(data_str)


class ASCOffice(WebsiteGenerator):
    pass


def get_list(doctype, txt, filters, limit_start, limit_page_length=20, order_by=None):
    from frappe.www.list import get_list

    user = frappe.session.user
    ignore_permissions = True
    if not filters:
        filters = []
    filters.append(('ASC Office', 'published', '=', 1))
    # result = get_list(
    #     doctype, txt, filters, limit_start, limit_page_length, ignore_permissions=ignore_permissions, order_by=order_by
    # )

    result = frappe.get_all(doctype, fields=[
                            "title", "status", "address", "tel_consul"],
                            limit_start=limit_start,
                            limit_page_length=limit_page_length,
                            ignore_permissions=ignore_permissions,
                            filters=filters,
                            order_by=order_by)
    print(result)
    return result


def get_list_context(context=None):
    return {
        "title": "Офіси ЦНАП",
        "get_list": get_list,
        # "row_template": "templates/asc_news_row.html",
        "no_breadcrumbs": False,
        # "order_by": "published_on ASC",
    }
