frappe.listview_settings["ASC News"] = {
    hide_name_column: true,
    add_fields: ["title", "published", "category"],
    get_indicator: function (doc) {
        if (doc.published) {
            return [__("Published"), "green", "published,=,Yes"];
        } else {
            return [__("Not Published"), "gray", "published,=,Yes"];
        }
    },
};
