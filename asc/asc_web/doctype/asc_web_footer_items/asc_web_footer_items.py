# Copyright (c) 2024, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCWebFooterItems(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		icon: DF.AttachImage | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		title: DF.TextEditor | None
	# end: auto-generated types

	pass
