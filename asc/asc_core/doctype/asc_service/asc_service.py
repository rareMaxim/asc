# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ASCService(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from asc.asc_core.doctype.asc_service_provider_table.asc_service_provider_table import ASCServiceProviderTable
		from asc.asc_diia.doctype.asc_diia_related_services.asc_diia_related_services import ASCDiiaRelatedServices
		from frappe.types import DF

		id: DF.Data | None
		identifier: DF.Data | None
		keyword: DF.Data | None
		related_services: DF.Table[ASCDiiaRelatedServices]
		sector: DF.Link | None
		service_owner: DF.Link | None
		service_provider: DF.TableMultiSelect[ASCServiceProviderTable]
		short_description_plain: DF.SmallText | None
		title: DF.Data | None
	# end: auto-generated types
	pass
