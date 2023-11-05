
import datetime
from frappe.model.document import Document
import requests
import frappe

ENDPOINT = "https://guide.diia.gov.ua/api/v1"
UAGENT = "diia lime (contact:maks4a@gmail.com)"


def api_request(method, path, **kwargs):
    "Handles all HTTP requests for monobank endponts"
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


class Error(Exception):
    def __init__(self, message, response):
        super().__init__(message)
        self.response = response

    def __str__(self):
        return f"{self.response.status_code}: {self.args[0]}"


class DiiaApiBase(object):
    def make_request(self, method, path, **kwargs):
        headers = {"Glory": "Ukraine"}
        return api_request(method, path, headers=headers, **kwargs)


class DiiaASC(DiiaApiBase):
    def get_detail(self, asc_code):
        url = f"/asc/detail/{asc_code}/"
        return self.make_request("GET", url)

    def get_list(self):
        return self.make_request("GET", "/asc/list/")


class DiiaCategories(DiiaApiBase):
    def get_detail(self, thematic_area_id):
        url = f"/categories/detail/{thematic_area_id}/"
        return self.make_request("GET", url)

    def get_list(self):
        return self.make_request("GET", "/categories/list/")


class DiiaEvents(DiiaApiBase):
    def get_list(self):
        return self.make_request("GET", "/events/list/")


class DiiaRegister(DiiaApiBase):
    def get_list(self):
        return self.make_request("GET", "/register/list/")

    def get_detail(self, service_id: str):
        url = f"/register/detail/{service_id}/"
        return self.make_request("GET", url)

    def download(self):
        # https://guide.diia.gov.ua/register/download/json/
        return self.make_request("GET", "/register/download/json/")

# Diia to Frappe whitelist adapters


class FrpDiiaEvents():
    EVENT_DOCTYPE = "ASC Diia Events"

    def parse_events(self, events):
        self.count_create = 0
        self.count_update = 0
        for event in events:
            self.new_event(event)
        return frappe._dict({
            "count_create": self.count_create,
            "count_update": self.count_update
        })

    def new_event(self, event) -> "Document":
        if not frappe.db.get_value(self.EVENT_DOCTYPE, event['id']):
            # create a new document
            doc = frappe.new_doc(self.EVENT_DOCTYPE)
            doc.id = event['id']
            doc.insert()
            self.count_create += 1
        else:
            # open a exist document
            doc = frappe.get_doc(self.EVENT_DOCTYPE, event['id'])
            self.count_update += 1
        start_at = datetime.datetime.strptime(
            (event['start_at']), '%Y-%m-%dT%H:%M:%S%z').strftime("%Y-%m-%d %H:%M:%S")
        end_at = datetime.datetime.strptime(
            (event['end_at']), '%Y-%m-%dT%H:%M:%S%z').strftime("%Y-%m-%d %H:%M:%S")
        doc.title = event['name']
        doc.public_text = event['public_text']

        doc.start_at = start_at
        doc.end_at = end_at
        doc.comment = event['comment']
        doc.save()
        return doc


@frappe.whitelist()
def diia_event_getList():
    diia_events = DiiaEvents().get_list()
    frp_diia_events = FrpDiiaEvents()
    data = frp_diia_events.parse_events(diia_events)
    return f"Успішно отримано з порталу. <br>Створено {data.count_create}. <br>Оновлено {data.count_update}."


class FrpDiiaCategories():
    THEMATIC_DOCTYPE = "ASC Diia Thematic Area"
    SECTOR_DOCTYPE = "ASC Diia Category"

    def populate_category(self, doc_them_area, category) -> "Document":
        if not frappe.db.get_value(self.SECTOR_DOCTYPE, category['id']):
            # create a new document
            doc_cat = frappe.new_doc(self.SECTOR_DOCTYPE)
            doc_cat.id = category['id']
            doc_cat.insert()
        else:
            # open a exist document
            doc_cat = frappe.get_doc(self.SECTOR_DOCTYPE, category['id'])
        doc_cat.title = category['name']
        doc_cat.thematic_area = doc_them_area
        doc_cat.save()
        return doc_cat

    def populate_categories(self, doc_them_area, categories):
        for category in categories:
            self.populate_category(doc_them_area, category)

    def populate_them_area(self, them_area) -> "Document":
        if not frappe.db.get_value(self.THEMATIC_DOCTYPE, them_area['id']):
            # create a new document
            doc = frappe.new_doc(self.THEMATIC_DOCTYPE)
            doc.id = them_area['id']
            doc.insert()
        else:
            # open a exist document
            doc = frappe.get_doc(self.THEMATIC_DOCTYPE, them_area['id'])
        if them_area['start_at']:
            start_at = datetime.datetime.strptime(
                (them_area['start_at']), '%Y-%m-%dT%H:%M:%S%z')
            doc.start_at = start_at.strftime("%Y-%m-%d %H:%M:%S")

        if them_area['end_at']:
            end_at = datetime.datetime.strptime(
                (them_area['end_at']), '%Y-%m-%dT%H:%M:%S%z')
            doc.end_at = end_at.strftime("%Y-%m-%d %H:%M:%S")

        doc.title = them_area['theme']
        doc.comment = them_area['comment']
        doc.save()
        return doc

    def populate_them_areas(self, them_areas):
        for them_area in them_areas:
            doc_them = self.populate_them_area(them_area)
            self.populate_categories(doc_them, them_area['categories'])


@frappe.whitelist()
def diia_categories_getList():
    them_areas = DiiaCategories().get_list()
    frp_cat = FrpDiiaCategories()
    data = frp_cat.populate_them_areas(them_areas)


class FrpDiiaRegister():
    SERVICE_DOCTYPE = "ASC Service"
    PROVIDER_DOCTYPE = "ASC Service Provider"

    def fill_service_provider(self, service, parent_doc):
        if not frappe.db.get_value(self.PROVIDER_DOCTYPE, {"title": service['name']}):
            # create a new document
            serv_prov = frappe.new_doc(self.PROVIDER_DOCTYPE)
            serv_prov.title = service['name']
            serv_prov.insert()
        else:
            # open a exist document
            serv_prov = frappe.get_doc(self.PROVIDER_DOCTYPE,  {
                "title": service['name']})
        serv_prov.spatial = service['spatial']
        serv_prov.shortname = service['shortname']
        serv_prov.save()
        parent_doc.append("service_provider", {
            "service_provider": serv_prov})
        parent_doc.save()

    def fill_service_providers(self, parent_doc, service_providers):
        parent_doc.service_provider.clear()
        parent_doc.set("service_provider", [])
        for service in service_providers:
            self.fill_service_provider(service, parent_doc)

    def fill_sector(self, sector, parent):
        if frappe.db.get_value("ASC Diia Category", sector['id']):
            parent.sector = sector['id']

    def fill_service_owner(self, service_owner) -> "Document":
        OWNER_DOCTYPE = "ASC Diia Service Owner"

        if not frappe.db.get_value(OWNER_DOCTYPE, {"title": service_owner['name']}):
            # create a new document
            own = frappe.new_doc(OWNER_DOCTYPE)
            own.title = service_owner['name']
            own.insert()
        else:
            # open a exist document
            own = frappe.get_doc(OWNER_DOCTYPE,  {
                "title": service_owner['name']})
        own.spatial = service_owner["spatial"]
        own.shortname = service_owner["shortname"]
        own.is_group = 1
        if service_owner['parent']:
            own.parent_asc_diia_service_owner = self.fill_service_owner(
                service_owner['parent'])
        own.save()
        return own

    def fill_related_service(self, service) -> "Document":
        if not frappe.db.get_value(self.SERVICE_DOCTYPE, service['id']):
            # create a new document
            acc = frappe.new_doc(self.SERVICE_DOCTYPE)
            acc.id = service['id']
            acc.insert()
        else:
            # open a exist document
            acc = frappe.get_doc(self.SERVICE_DOCTYPE, service['id'])

        acc.identifier = service['identifier']
        acc.title = service['name']
        # acc.keyword = service['name']
        acc.save()
        return acc

    def fill_related_services(self, parent: Document, serivces):
        parent.set("related_services", [])
        for service in serivces:
            doc = self.fill_related_service(service)

            parent.append("related_services", {"service": doc})
            parent.save()

    def fill_service(self, service):
        if not frappe.db.get_value(self.SERVICE_DOCTYPE, service['id']):
            # create a new document
            acc = frappe.new_doc(self.SERVICE_DOCTYPE)
            acc.id = service['id']
            acc.insert()
        else:
            # open a exist document
            acc = frappe.get_doc(self.SERVICE_DOCTYPE, service['id'])
        acc.identifier = service['identifier']
        acc.keyword = service['keyword']
        if service['sector']:
            self.fill_sector(service['sector'], acc)

        acc.title = service['translations'][0]['name']
        acc.short_description_plain = service['translations'][0]['short_description_plain']
        self.fill_service_providers(acc, service['service_provider'])
        acc.service_owner = self.fill_service_owner(service['owner'])
        self.fill_related_services(
            parent=acc, serivces=service['related_services'])
        acc.save()

    def fill_services(self, services):
        self.service_create = 0
        self.service_update = 0
        # for service in services:
        self.fill_service(services[0])
        return frappe._dict({
            "service_create":  self.service_create,  "service_update":  self.service_update,
            # "category_create": self.category_create, "category_update": self.category_update,
        })


@frappe.whitelist()
def diia_register_getList():
    services = DiiaRegister().get_list()['results']
    frp_services = FrpDiiaRegister()
    data = frp_services.fill_services(services)
    return f"Успішно отримано з порталу. <br>Створено {data.service_create}. <br>Оновлено {data.service_update}."


@frappe.whitelist()
def diia_register_getDetail(service_id):
    service = DiiaRegister().get_detail(service_id)
    frp_services = FrpDiiaRegister()
    data = frp_services.fill_service(service)
    return f"Успішно отримано з порталу"


@frappe.whitelist()
def diia_register_getDetailFromDownload(service_id):
    service = DiiaRegister().get_detail(service_id)
    frp_services = FrpDiiaRegister()
    data = frp_services.fill_service(service)
    return f"Успішно отримано з порталу"
