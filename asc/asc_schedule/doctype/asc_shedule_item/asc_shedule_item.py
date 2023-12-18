# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCSheduleItem(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		all_day: DF.Check
		color: DF.Color | None
		dt: DF.Link | None
		dynamic_link_ocjf: DF.DynamicLink | None
		employee: DF.Link | None
		ends_on: DF.Time | None
		event_type: DF.Link | None
		friday: DF.Check
		is_work: DF.Check
		monday: DF.Check
		repeat_on: DF.Literal["", "Daily", "Weekly", "Monthly", "Yearly"]
		repeat_this_event: DF.Check
		repeat_till: DF.Date | None
		saturday: DF.Check
		start_date: DF.Date | None
		starts_on: DF.Time | None
		sunday: DF.Check
		thursday: DF.Check
		title: DF.Data | None
		tuesday: DF.Check
		wednesday: DF.Check
	# end: auto-generated types

	pass
