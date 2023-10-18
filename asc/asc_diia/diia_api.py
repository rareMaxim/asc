
import datetime
import requests
import frappe

ENDPOINT = "https://guide.diia.gov.ua/api/v1"
UAGENT = "diia lime (contact:maks4a@gmail.com)"


def api_request(method, path, **kwargs):
    "Handles all HTTP requests for monobank endponts"
    headers = kwargs.pop("headers")
    headers["User-Agent"] = UAGENT
    url = ENDPOINT + path
    # print(method, url, headers)
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

# Diia to Frappe whitelist adapters


@frappe.whitelist()
def diia_event_getList():
    cntCreate, cntUpdate = 0, 0
    for event in DiiaEvents().get_list():
        if not frappe.db.get_value("ASC Diia Events", event['id']):
            # create a new document
            acc = frappe.new_doc("ASC Diia Events")
            acc.id = event['id']
            acc.insert()
            cntCreate = cntCreate + 1
        else:
            # open a exist document
            acc = frappe.get_doc("ASC Diia Events", event['id'])
            cntUpdate = cntUpdate + 1
        start_at = datetime.datetime.strptime(
            (event['start_at']), '%Y-%m-%dT%H:%M:%S%z').strftime("%Y-%m-%d %H:%M:%S")
        end_at = datetime.datetime.strptime(
            (event['end_at']), '%Y-%m-%dT%H:%M:%S%z').strftime("%Y-%m-%d %H:%M:%S")
        acc.title = event['name']
        acc.public_text = event['public_text']

        acc.start_at = start_at
        acc.end_at = end_at
        acc.comment = event['comment']
        acc.save()

    return f"Успішно отримано з порталу. <br>Створено {cntCreate}. <br>Оновлено {cntUpdate}."


@frappe.whitelist()
def diia_categories_getList():
    cntCreate, cntUpdate = 0, 0
    for them_area in DiiaCategories().get_list():
        if not frappe.db.get_value("ASC Diia Thematic Area", them_area['id']):
            # create a new document
            acc = frappe.new_doc("ASC Diia Thematic Area")
            acc.id = them_area['id']
            acc.insert()
            cntCreate = cntCreate + 1
        else:
            # open a exist document
            acc = frappe.get_doc("ASC Diia Thematic Area", them_area['id'])
            cntUpdate = cntUpdate + 1
        if them_area['start_at']:
            start_at = datetime.datetime.strptime(
                (them_area['start_at']), '%Y-%m-%dT%H:%M:%S%z')
            acc.start_at = start_at.strftime("%Y-%m-%d %H:%M:%S")

        if them_area['end_at']:
            end_at = datetime.datetime.strptime(
                (them_area['end_at']), '%Y-%m-%dT%H:%M:%S%z')
            acc.end_at = end_at.strftime("%Y-%m-%d %H:%M:%S")

        acc.theme = them_area['theme']
        acc.comment = them_area['comment']
        acc.save()
        for category in them_area['categories']:
            catCreate, catUpdate = 0, 0
            if not frappe.db.get_value("ASC Diia Category", category['id']):
                # create a new document
                doc_cat = frappe.new_doc("ASC Diia Category")
                doc_cat.id = category['id']
                doc_cat.insert()
                catCreate = catCreate + 1
            else:
                # open a exist document
                doc_cat = frappe.get_doc("ASC Diia Category", category['id'])
                catUpdate = catUpdate + 1
            doc_cat.title = category['name']
            doc_cat.theme = acc
            doc_cat.save()

    return f"Успішно отримано з порталу. <br>Створено {cntCreate}. <br>Оновлено {cntUpdate}."


@frappe.whitelist()
def diia_register_getList():
    cntCreate, cntUpdate = 0, 0
    services = DiiaRegister().get_list()
    for service in services['results']:
        if not frappe.db.get_value("ASC Service", service['id']):
            # create a new document
            acc = frappe.new_doc("ASC Service")
            acc.id = service['id']
            acc.insert()
            cntCreate = cntCreate + 1
        else:
            # open a exist document
            acc = frappe.get_doc("ASC Service", service['id'])
            cntUpdate = cntUpdate + 1

        acc.identifier = service['identifier']
        acc.keyword = service['keyword']
        # if frappe.db.get_value("ASC Diia Category", service['id']):
        acc.sector = service['sector']['id']

        acc.title = service['translations'][0]['name']
        acc.short_description_plain = service['translations'][0]['short_description_plain']
        diia_service_provider(acc, service['service_provider'])
        acc.save()

    return f"Успішно отримано з порталу. <br>Створено {cntCreate}. <br>Оновлено {cntUpdate}."


def diia_service_provider(parent_doc, service_providers):
    parent_doc.service_provider.clear()
    parent_doc.set("service_provider", [])
    for service in service_providers:
        if not frappe.db.get_value("ASC Service Provider", {"title": service['name']}):
            # create a new document
            serv_prov = frappe.new_doc("ASC Service Provider")
            serv_prov.title = service['name']
            serv_prov.insert()
        else:
            # open a exist document
            serv_prov = frappe.get_doc("ASC Service Provider",  {
                                       "title": service['name']})
        serv_prov.spatial = service['spatial']
        serv_prov.shortname = service['shortname']
        serv_prov.save()
        parent_doc.append("service_provider", {
            "service_provider": serv_prov})
        parent_doc.save()
