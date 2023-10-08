# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
import frappe
from frappe.desk.notifications import get_open_count
from frappe.model.document import Document


class ASCEmployees(Document):
    def before_save(self):
        self.full_name = f'{self.last_name} {self.first_name or ""} {self.middle_name or ""}'
        self.short_name = f'{self.last_name} {self.first_name[0] or ""}. {self.middle_name[0] or ""}.'


@frappe.whitelist()
def get_timeline_data(doctype: str, name: str) -> dict[int, int]:
    """Return timeline for attendance"""
    from frappe.query_builder.functions import Count, CurDate, Date, UnixTimestamp
    from frappe.query_builder import Interval
    empl_attendance = frappe.qb.DocType("ASC Employee Attendance")
    data = dict(
        frappe.qb.from_(empl_attendance)
        .select(UnixTimestamp(empl_attendance.attendance_date), Count("*"))
        .where(empl_attendance.employee == name)
        .where(empl_attendance.attendance_date >= CurDate() - Interval(years=1))
        .groupby(Date(empl_attendance.attendance_date))
        .run()
    )
    print(data)
    return data