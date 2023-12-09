# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

import frappe
from asc.asc_web.doctype.asc_employees.asc_employees import ASCEmployees
from asc.asc_web.doctype.asc_office.asc_office import ASCOffice

# import frappe
from frappe.model.document import Document


class ASCAppeal(Document):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        answer_receive_datetime: DF.Datetime | None
        appeal_reg_date_time: DF.Datetime | None
        cnap_office: DF.Link | None
        is_consultation: DF.Check
        is_test: DF.Check
        service: DF.Link | None
    # end: auto-generated types

    def before_save(self):
        pass


def get_employee_by_user(user=None):
    user = user if user else frappe.session.user
    if frappe.db.exists("ASC Employees", {"user": user}):
        return frappe.get_doc("ASC Employees", {"user": user})
    else:
        return None


@frappe.whitelist()
def get_office_by_user(user=None) -> ASCOffice:
    employee = get_employee_by_user(user)
    return frappe.get_doc("ASC Office", employee.office) if employee else None
