import frappe 

@frappe.whitelist(allow_guest=True)
def update_website_context(context):
    asc_web_settings = frappe.get_single("ASC Web Settings").as_dict()

    context["asc"] = asc_web_settings
    print(context["asc"])