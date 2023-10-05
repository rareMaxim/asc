# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

import json
import requests
import frappe
from frappe.model.document import Document


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


class ASCOffice(Document):
    pass
