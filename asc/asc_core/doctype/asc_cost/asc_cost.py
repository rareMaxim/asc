# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCCost(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from asc.asc_core.doctype.asc_cost_table.asc_cost_table import ASCCostTable
		from frappe.types import DF

		cost: DF.Table[ASCCostTable]
		duration_type: DF.Literal["\u0420\u043e\u0431\u043e\u0447\u0456 \u0434\u043d\u0456", "\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u043d\u0456 \u0434\u043d\u0456"]
		duration_value: DF.Float
		duration_verbose: DF.Data | None
		identifier: DF.SmallText | None
		service: DF.Link | None
		title: DF.Data | None
	# end: auto-generated types
	pass
