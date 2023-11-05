# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
import frappe
from frappe.desk.notifications import get_open_count
from frappe.model.document import Document


class ASCEmployees(Document):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        first_name: DF.Data | None
        full_name: DF.Data | None
        last_name: DF.Data | None
        middle_name: DF.Data | None
        phone: DF.Data | None
        short_name: DF.Data | None
        status: DF.Literal[
            "\u0420\u043e\u0431\u043e\u0447\u0456 \u0434\u043d\u0456",
            "\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0456\u0439\u043d\u043e",
            "\u041f\u0440\u043e\u0441\u0442\u0456\u0439",
            "\u041f\u0440\u0438\u0437\u0443\u043f\u0438\u043d\u0435\u043d\u043e",
            "\u0417\u0432\u0456\u043b\u044c\u043d\u0435\u043d\u043e",
        ]
        user: DF.Link | None

    # end: auto-generated types
    def before_save(self):
        self.full_name = (
            f'{self.last_name} {self.first_name or ""} {self.middle_name or ""}'
        )
        self.short_name = (
            f'{self.last_name} {self.first_name[0] or ""}. {self.middle_name[0] or ""}.'
        )


@frappe.whitelist()
def get_timeline_data(doctype: str, name: str) -> dict[int, int]:
    """Return timeline for attendance"""
    from frappe.query_builder.functions import Count, CurDate, Date, UnixTimestamp
    from frappe.query_builder import Interval

    empl_attendance = frappe.qb.DocType("ASC Employee Attendance")
    return dict(
        frappe.qb.from_(empl_attendance)
        .select(UnixTimestamp(empl_attendance.attendance_date), Count("*"))
        .where(empl_attendance.employee == name)
        .where(empl_attendance.attendance_date >= CurDate() - Interval(years=1))
        .groupby(Date(empl_attendance.attendance_date))
        .run()
    )
