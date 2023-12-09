# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCApplicant(Document):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        birth_day: DF.Date | None
        first_name: DF.Data | None
        full_name: DF.Data | None
        inn: DF.Data | None
        last_name: DF.Data | None
        middle_name: DF.Data | None
        phone: DF.Data
        sex: DF.Link | None
        social_status: DF.Link | None
        unzr: DF.Data | None

    # end: auto-generated types
    def split_fullname(self, index: int) -> str:
        """Split the applicant's name into parts"""
        data = self.full_name.split()
        return data[index] if len(data) > index else None

    @property
    def last_name(self):
        return self.split_fullname(0)

    @property
    def first_name(self):
        return self.split_fullname(1)

    @property
    def middle_name(self):
        return self.split_fullname(2)
