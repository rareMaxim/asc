# Copyright (c) 2024, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCCustomerJournal(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		answer: DF.SmallText | None
		answer_date: DF.Date | None
		phone: DF.Data | None
		question: DF.SmallText | None
		question_date: DF.Date | None
		піб: DF.Data | None
	# end: auto-generated types

	pass
