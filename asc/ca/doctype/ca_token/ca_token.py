# Copyright (c) 2024, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ca-Token(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		ca_owner: DF.Data | None
		cert_end: DF.Date | None
		employee: DF.Link | None
	# end: auto-generated types

	pass
