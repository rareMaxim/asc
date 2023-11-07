# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ASCEmployeeAttendance(Document):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        attendance_date: DF.Date | None
        employee: DF.Link | None
        full_name: DF.Data | None
    # end: auto-generated types
    # def before_save(self):
    #     self.full_name = frappe.get_value("ASC Employees", self.employee, "full_name") 
    pass
