import frappe
from frappe import _

from asc.asc_diia.doctype.asc_diia_thematic_area.asc_diia_thematic_area import get_thematic_area_list


sitemap = 1



def get_context(context):
    print("Halo")
    context.parents = [{"name": _("Home"), "route": "/"}]
    context.thematic_areas = get_thematic_area_list(
        "ASC Diia Thematic Area", None, None)
    # print(context.thematic_areas)
