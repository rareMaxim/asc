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

		applicantphone: DF.Data
		applicantsocialstatus: DF.Link | None
		birth_day: DF.Date | None
		first_name: DF.Data | None
		inn: DF.Data | None
		last_name: DF.Data | None
		middle_name: DF.Data | None
		sex: DF.Link | None
		номер_єддр: DF.Data | None
	# end: auto-generated types
	pass
