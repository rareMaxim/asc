# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCDiiaEvents(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		comment: DF.SmallText | None
		end_at: DF.Datetime | None
		id: DF.Data | None
		public_text: DF.Data | None
		start_at: DF.Datetime | None
		title: DF.Data | None
	# end: auto-generated types
	pass
