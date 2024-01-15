// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

frappe.listview_settings["caToken"] = {
    hide_name_column: true,
    add_fields: ["cert_end", "ca_owner"],
    // get_indicator: function (doc) {
    //     if (doc.cert_end) {
    //         return [__("Published"), "green", "published,=,Yes"];
    //     } else {
    //         return [__("Not Published"), "gray", "published,=,Yes"];
    //     }
    // },
};