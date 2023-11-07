from frappe import _


def get_data():
    return {
        "heatmap": True,
        "heatmap_message": _("Графік будується на записах в таблиці  ASC Employee Attendance"),
        "fieldname": "employee",
        "transactions": [
            {
                "label": _("Присутність співробітників"),
                "items": ["ASC Employee Attendance"],
            }
        ],
    }
