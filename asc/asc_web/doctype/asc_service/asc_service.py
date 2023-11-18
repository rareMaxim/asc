# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
import frappe
from frappe.website.website_generator import WebsiteGenerator


class ASCService(WebsiteGenerator):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from asc.asc_web.doctype.asc_applicant_type_table.asc_applicant_type_table import ASCApplicantTypeTable
        from asc.asc_web.doctype.asc_diia_input_table.asc_diia_input_table import ASCDiiaInputTable
        from asc.asc_web.doctype.asc_diia_related_services.asc_diia_related_services import ASCDiiaRelatedServices
        from asc.asc_web.doctype.asc_diia_service_events_table.asc_diia_service_events_table import ASCDiiaServiceEventsTable
        from asc.asc_web.doctype.asc_diia_service_produces_table.asc_diia_service_produces_table import ASCDiiaServiceProducesTable
        from asc.asc_web.doctype.asc_regulatory_documents_table.asc_regulatory_documents_table import ASCRegulatoryDocumentsTable
        from asc.asc_web.doctype.asc_service_provider_table.asc_service_provider_table import ASCServiceProviderTable
        from asc.asc_web.doctype.asc_service_refusal_grounds.asc_service_refusal_grounds import ASCServiceRefusalGrounds
        from frappe.types import DF

        access_link: DF.Data | None
        applicant_type: DF.TableMultiSelect[ASCApplicantTypeTable]
        events: DF.Table[ASCDiiaServiceEventsTable]
        id: DF.Data | None
        identifier: DF.Data | None
        input: DF.Table[ASCDiiaInputTable]
        keyword: DF.Data | None
        legal_base: DF.TextEditor | None
        produces: DF.Table[ASCDiiaServiceProducesTable]
        published: DF.Check
        refusal_grounds: DF.Table[ASCServiceRefusalGrounds]
        regulatory_documents: DF.Table[ASCRegulatoryDocumentsTable]
        related_services: DF.Table[ASCDiiaRelatedServices]
        route: DF.Data | None
        sector: DF.Link | None
        service_owner: DF.Link | None
        service_provider: DF.Table[ASCServiceProviderTable]
        service_status: DF.Link | None
        short_description_plain: DF.SmallText | None
        thematic_area: DF.Link | None
        title: DF.Data | None
    # end: auto-generated types

    @frappe.whitelist()
    def make_route(self):
        if not self.route:
            return "services" + "/" + self.scrub(self.identifier)

    def before_save(self):
        if not (self.thematic_area) and (self.sector):
            them_area = frappe.get_value(
                "ASC Diia Category", self.sector, "thematic_area"
            )
            self.thematic_area = them_area

    def get_service_provider_as_list(self, service_provider):
        result = []
        for provider in service_provider:
            title = frappe.get_value(
                "ASC Service Provider", provider.service_provider, "title"
            )
            result.append(title)
        return result

    def get_doc_input_as_list(self, input):
        result = []
        for doc in input:
            title = frappe.get_value("ASC Service Input", doc.service_input, "title")
            result.append(title)
        return result

    def get_related_services_as_list(self, related_services):
        result = []
        for service in related_services:
            title = frappe.get_value("ASC Service", service.service, "title")
            route = frappe.get_value("ASC Service", service.service, "route")
            result.append({"title": title, "route": route})
        return result

    def get_applicant_type_as_list(self, applicant_types):
        result = []
        for type in applicant_types:
            title = frappe.get_value("ASC Applicant Type", type.applicant_type, "title")
            result.append(title)
        return result

    def get_produces_as_list(self, produces):
        return [produce.get("title") for produce in produces]

    def get_regulatory_doc(self) -> list:
        result = []
        for reg_doc in self.regulatory_documents:
            doc = frappe.get_doc("ASC Service Regulatory Doc", reg_doc.reg_doc)
            result.append({"title": doc.title, "url": doc.url})
        return result

    def get_context(self, context):
        # this is for double precaution. usually it wont reach this code if not published
        if not self.published:
            raise PermissionError("This service has not been published yet!")
        context.no_breadcrumbs = False
        context.parents = [
            {"name": frappe._("Home"), "route": "/"},
            # {"name": "News", "route": "/news"},
            {"label": "Меню послуг", "route": "/thematic_area"},
        ]
        #
        context.service_provider = self.get_service_provider_as_list(
            self.service_provider
        )
        context.title = self.title
        context.keyword = self.keyword
        context.input = self.get_doc_input_as_list(self.input)
        context.related_services = self.get_related_services_as_list(
            self.related_services
        )
        context.applicant_type = self.get_applicant_type_as_list(self.applicant_type)
        context.produces = self.get_produces_as_list(self.produces)
        context.costs = self.get_coast()
        context.regulatory_documents = self.get_regulatory_doc()

    def get_coast(self):
        cost_list = frappe.get_list("ASC Cost", filters={"service": self.name})
        result = []
        for cost in cost_list:
            doc = frappe.get_doc("ASC Cost", cost).as_dict()
            result.append(doc)
        return result
