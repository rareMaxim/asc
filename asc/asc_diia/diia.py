
import requests


class Error(Exception):
    def __init__(self, message, response):
        super().__init__(message)
        self.response = response

    def __str__(self):
        return f"{self.response.status_code}: {self.args[0]}"


class DiiaApiBase(object):
    ENDPOINT = "https://guide.diia.gov.ua/api/v1"
    UAGENT = "diia lime (contact:maks4a@gmail.com)"

    def api_request(method, path, **kwargs):
        "Handles all HTTP requests for monobank endponts"
        headers = kwargs.pop("headers")
        headers["User-Agent"] = DiiaApiBase.UAGENT
        url = DiiaApiBase.ENDPOINT + path
        # print(method, url, headers)
        response = requests.request(method, url, headers=headers, **kwargs)

        if response.status_code == 200:
            return response.json()
        data = response.json()
        message = data.get("errorDescription", str(data))
        raise Error(message, response)


class DiiaASC(DiiaApiBase):
    def get_detail(self, asc_code):
        url = f"/asc/detail/{asc_code}/"
        return self.api_request("GET", url)

    def get_list(self):
        return self.api_request("GET", "/asc/list/")
