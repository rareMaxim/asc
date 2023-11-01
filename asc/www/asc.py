
import frappe
from frappe import _

from asc.asc_diia.doctype.asc_diia_thematic_area.asc_diia_thematic_area import get_thematic_area_list
from asc.asc_core.doctype.asc_news.asc_news import get_news_list

sitemap = 1


def get_context(context):
    context.parents = [{"name": _("Home"), "route": "/"}]
    context.thematic_areas = get_thematic_area_list(
        "ASC Diia Thematic Area", None, None)
    context.last_news = get_news_list(
        doctype="ASC News", limit_start=0, limit_page_length=5, filters={'category': 'новини'})
    context.title = "Меню послуг"
    # print(context.thematic_areas)
