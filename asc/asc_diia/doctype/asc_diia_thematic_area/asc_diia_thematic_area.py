# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCDiiaThematicArea(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		comment: DF.SmallText | None
		end_at: DF.Date | None
		id: DF.Data | None
		start_at: DF.Date | None
		theme: DF.Data | None
	# end: auto-generated types
	pass
