# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCCostTable(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		currency: DF.Link | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		type: DF.Literal["\u0411\u0435\u0437\u043e\u043f\u043b\u0430\u0442\u043d\u0435 \u043d\u0430\u0434\u0430\u043d\u043d\u044f", "\u0421\u0443\u043c\u0430", "\u041f\u0440\u043e\u0436\u0438\u0442\u043a\u043e\u0432\u0456 \u043c\u0456\u043d\u0456\u043c\u0443\u043c\u0438", "\u041d\u0435\u043e\u043f\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0443\u0432\u0430\u043d\u0456 \u043c\u0456\u043d\u0456\u043c\u0443\u043c\u0438 \u0434\u043e\u0445\u043e\u0434\u0456\u0432 \u0433\u0440\u043e\u043c\u0430\u0434\u044f\u043d"]
		value: DF.Currency
		verbose: DF.Data | None
	# end: auto-generated types
	pass
