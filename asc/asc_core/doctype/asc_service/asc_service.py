# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator


class ASCService(WebsiteGenerator):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from asc.asc_core.doctype.asc_service_provider_table.asc_service_provider_table import ASCServiceProviderTable
		from asc.asc_diia.doctype.asc_diia_input_table.asc_diia_input_table import ASCDiiaInputTable
		from asc.asc_diia.doctype.asc_diia_related_services.asc_diia_related_services import ASCDiiaRelatedServices
		from asc.asc_diia.doctype.asc_diia_service_events_table.asc_diia_service_events_table import ASCDiiaServiceEventsTable
		from asc.asc_diia.doctype.asc_diia_service_produces_table.asc_diia_service_produces_table import ASCDiiaServiceProducesTable
		from frappe.types import DF

		events: DF.Table[ASCDiiaServiceEventsTable]
		id: DF.Data | None
		identifier: DF.Data | None
		input: DF.Table[ASCDiiaInputTable]
		keyword: DF.Data | None
		produces: DF.Table[ASCDiiaServiceProducesTable]
		published: DF.Check
		related_services: DF.Table[ASCDiiaRelatedServices]
		route: DF.Data | None
		sector: DF.Link | None
		service_owner: DF.Link | None
		service_provider: DF.TableMultiSelect[ASCServiceProviderTable]
		service_status: DF.Link | None
		short_description_plain: DF.SmallText | None
		title: DF.Data | None
	# end: auto-generated types
	pass
