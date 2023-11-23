# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

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
		service: DF.Link | None
	# end: auto-generated types
	pass
