# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.utils.nestedset import NestedSet


class ASCDiiaServiceOwner(NestedSet):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		is_group: DF.Check
		lft: DF.Int
		old_parent: DF.Link | None
		parent_asc_diia_service_owner: DF.Link | None
		rgt: DF.Int
		shortname: DF.Data | None
		spatial: DF.Data | None
		title: DF.Data | None
	# end: auto-generated types
	pass
