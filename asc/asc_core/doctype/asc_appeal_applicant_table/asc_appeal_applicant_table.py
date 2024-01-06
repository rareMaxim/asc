# Copyright (c) 2024, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCAppealApplicantTable(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		address: DF.Data | None
		applicant: DF.Link | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		phone: DF.Data | None
		uid: DF.Data | None
	# end: auto-generated types

	pass
