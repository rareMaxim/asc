# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
import datetime
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
    "Handles all HTTP requests for monobank endponts"
    headers = kwargs.pop("headers")
    headers["User-Agent"] = UAGENT
    url = ENDPOINT + path
    # print(method, url, headers, **kwargs)
    response = requests.request(method, url, headers=headers, **kwargs)

    if response.status_code == 200:
        return response.json()
    data = response.json()
    message = data.get("errorDescription", str(data))
    raise Error(message, response)


def download_file(url: str):
    pass


def get_applicant_type_name(title: str):
    applicant = frappe.get_value("ASC Applicant Type", {
                                 "title": title}, "name")
    if applicant:
        print(applicant)
        return applicant
    else:
        doc = frappe.new_doc("ASC Applicant Type")
        doc.title = title
        doc.save()
        return doc.name


def populate_service_json(service):
    identifier = service["identifier"]
    if not frappe.get_value("ASC Service", {"identifier": identifier}, "identifier"):
        return
    service_doc = frappe.get_doc("ASC Service", {"identifier": identifier})
    service_doc.legal_base = service["legal_base"]
    service_doc.set("refusal_grounds", [])
    for ref_grnd in service["refusal_grounds"]:
        service_doc.append("refusal_grounds", {"refusal_ground": ref_grnd})
    service_doc.set("applicant_type", [])
    for applicant in service["applicant_type"]:
        applicant_name = get_applicant_type_name(applicant)
        service_doc.append("applicant_type", {
                           "applicant_type": applicant_name})

    print(frappe.as_json(service_doc, ensure_ascii=False))
    service_doc.save()


def populate_from_json(filename: str):
    import json
    _file = frappe.get_doc("File", {"file_url": filename})
    full_name = _file.get_full_path()
    # Opening JSON file
    f = open(full_name)

    # returns JSON object as
    # a dictionary
    data = json.load(f)
    for service in data["entries"]:
        populate_service_json(service)
        break


@frappe.whitelist()
def download_dump():
    file = str(frappe.get_value("ASC Diia Api", None, "diia_api_dump_file"))
    if not file.endswith(".json"):
        raise Error("Unknown file format")
    if file.startswith("http"):
        download_file(file)
    elif file.startswith("/files/") or file.startswith("/private/"):
        populate_from_json(file)
    else:
        raise Error("Unknown file format")

    print(file)
