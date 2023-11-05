from contextlib import suppress

import frappe
from frappe import _
from frappe.rate_limiter import rate_limit
from frappe.utils import validate_email_address

sitemap = 1

def get_offices():
    return frappe.get_all(
        "ASC Office", fields=["title", "address", "tel_consul", "status"]
    )

def get_context(context):
    context.parents =  [{"name": _("Home"), "route": "/"}]
    
    context.offices = get_offices()
    