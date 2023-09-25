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
    asc = json.loads(r.text)
    return str(asc)

class ASCOffice(Document):
	pass

