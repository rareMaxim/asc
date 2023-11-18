# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
from asc.asc_web.doctype.asc_cost.asc_cost import ASCCost
from asc.asc_web.doctype.asc_service.asc_service import ASCService
import requests
import frappe
from frappe.model.document import Document


class ASCDiiaApi(Document):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        diia_api_dump_file: DF.Attach | None
        назва: DF.Data | None
    # end: auto-generated types
    pass


ENDPOINT = "https://guide.diia.gov.ua/api/v1"
UAGENT = "Diia Lime Api (contact:maks4a@gmail.com)"


class Error(Exception):
    def __init__(self, message, response):
        super().__init__(message)
        self.response = response

    def __str__(self):
        return f"{self.response.status_code}: {self.args[0]}"


def api_request(method, path, **kwargs):
    "Handles all HTTP requests for endpoints"
    headers = kwargs.pop("headers")
    headers["User-Agent"] = UAGENT
    url = ENDPOINT + path
    #
    response = requests.request(method, url, headers=headers, **kwargs)

    if response.status_code == 200:
        return response.json()
    data = response.json()
    message = data.get("errorDescription", str(data))
    raise Error(message, response)


def download_file(url: str):
    pass


def get_applicant_type_name(title: str):
    if applicant := frappe.get_value("ASC Applicant Type", {"title": title}, "name"):
        return applicant
    doc = frappe.new_doc("ASC Applicant Type")
    doc.title = title
    doc.save()
    return doc.name


def update_regulatory_documents(service_doc: ASCService, json_reg_docs):
    exist_reg_doc = []
    for reg_doc in service_doc.regulatory_documents:
        if reg_doc_name := frappe.get_value(
            "ASC Service Regulatory Doc", reg_doc.reg_doc, "title"
        ):
            exist_reg_doc.append(reg_doc_name)
    for reg_doc_json in json_reg_docs:
        if reg_doc_json not in exist_reg_doc:
            if reg_doc_db_name := frappe.get_value(
                "ASC Service Regulatory Doc", {"title": reg_doc_json}, "name"
            ):
                reg_doc_db = frappe.get_doc(
                    "ASC Service Regulatory Doc", reg_doc_db_name
                )

            else:
                reg_doc_db = frappe.new_doc("ASC Service Regulatory Doc")
                reg_doc_db.insert()
            reg_doc_db.title = reg_doc_json
            if reg_doc_db.has_value_changed:
                reg_doc_db.save()
            service_doc.append("regulatory_documents", {"reg_doc": reg_doc_db.name})


def update_produces(service_doc: ASCService, json_produces):
    exist_produces = [produce.get("title") for produce in service_doc.produces]
    for produce in json_produces:
        if produce not in exist_produces:
            service_doc.append("produces", {"title": produce})


def update_cost(service_doc: ASCService, json_variations):
    for variation in json_variations:
        cost_doc_in_db = frappe.get_value(
            "ASC Cost",
            {"identifier": variation["identifier"], "service": service_doc.name},
            "name",
        )
        if not cost_doc_in_db:
            cost_doc = frappe.new_doc("ASC Cost")
        else:
            cost_doc = frappe.get_doc("ASC Cost", cost_doc_in_db)
        cost_doc.service = service_doc
        cost_doc.identifier = variation["identifier"]
        cost_doc.duration_verbose = variation["duration"]["verbose"]
        cost_doc.duration_type = variation["duration"]["type"]
        cost_doc.duration_value = variation["duration"]["value"]
        if not cost_doc.title:
            cost_doc.title = f"{cost_doc.identifier} ({service_doc.identifier})"
        #
        cost_doc.set("cost", [])
        for cost in variation["costs"]:
            data_dict = {}
            for data in cost.keys():
                data_dict |= {data: cost[data]}
            cost_doc.append("cost", data_dict)
        if not cost_doc_in_db:
            cost_doc.insert()
        cost_doc.save()


def get_id_from_identifier(identifier: str) -> str:
    return frappe.get_value("ASC Service", {"identifier": identifier}, "id")


def get_identifier_from_id(id: str) -> str:
    return frappe.get_value("ASC Service", {"id": id}, "identifier")


def get_service(idx: str = None, identifier: str = None) -> Document:
    if identifier:
        idx = get_id_from_identifier(identifier)
    return frappe.get_doc("ASC Service", idx) if idx else None


def update_refusal_appeal_person(service_doc: ASCService, json_refusal_appeal_person):
    exist_refusal_appeal_person = [
        ref_pers.get("title") for ref_pers in service_doc.refusal_appeal_person
    ]
    for ref_pers in json_refusal_appeal_person:
        if ref_pers not in exist_refusal_appeal_person:
            service_doc.append("refusal_appeal_person", {"title": ref_pers})


def populate_service_json(service):
    # Пошук послуги в БД
    # identifier = service["identifier"]
    # if not frappe.get_value("ASC Service", {"identifier": identifier}, "identifier"):
    #     return
    # service_doc = frappe.get_doc("ASC Service", {"identifier": identifier})
    service_doc = get_service(identifier=service["identifier"])
    # legal_base - Умови і випадки надання
    service_doc.legal_base = service["legal_base"]
    # refusal_grounds - Підстави для відмови у наданні послуги
    service_doc.set("refusal_grounds", [])
    for ref_grnd in service["refusal_grounds"]:
        service_doc.append("refusal_grounds", {"refusal_ground": ref_grnd})
    # applicant_type - Категорія суб'єкта звернення
    service_doc.set("applicant_type", [])
    for applicant in service["applicant_type"]:
        applicant_name = get_applicant_type_name(applicant)
        service_doc.append("applicant_type", {"applicant_type": applicant_name})
    update_regulatory_documents(service_doc, service["regulatory_documents"])
    update_produces(service_doc, service["produces"])
    update_cost(service_doc, service["variations"])
    # access_link - Адреса доступу до послуги у електронному вигляді
    service_doc.access_link = service["access_link"]
    #
    service_doc.save()


def populate_from_json(filename: str, id: str = None, identifier: str = None):
    import json

    _file = frappe.get_doc("File", {"file_url": filename})
    full_name = _file.get_full_path()
    # Opening JSON file
    f = open(full_name)

    # returns JSON object as
    # a dictionary
    data = json.load(f)
    if id:
        identifier = get_identifier_from_id(id)
    if identifier:
        for service in data["entries"]:
            if identifier == service["identifier"]:
                populate_service_json(service)
                break
    else:
        for service in data["entries"]:
            populate_service_json(service)


@frappe.whitelist()
def download_dump(id: str = None, identifier: str = None):
    file = str(frappe.get_value("ASC Diia Api", None, "diia_api_dump_file"))
    if not file.endswith(".json"):
        raise Error("Unknown file format")
    if file.startswith("http"):
        download_file(file)
    elif file.startswith("/files/") or file.startswith("/private/"):
        populate_from_json(file, id=id, identifier=identifier)
    else:
        raise Error("Unknown file format")
