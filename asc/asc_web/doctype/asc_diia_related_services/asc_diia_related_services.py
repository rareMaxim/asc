# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCDiiaRelatedServices(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		identifier: DF.Data | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		service: DF.Link
	# end: auto-generated types
	pass
