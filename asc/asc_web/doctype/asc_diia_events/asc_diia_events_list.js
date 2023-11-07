// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

function BtnGetFromApi(listview) {
    frappe.call({
        method: "asc.asc_diia.diia_api.diia_event_getList",
        callback: (r) => {
            frappe.show_alert(r.message, 15);
            listview.refresh();
        }
    });
}

frappe.listview_settings["ASC Diia Events"] = {
    hide_name_column: true,
    refresh: function (listview) {
        listview.page.add_inner_button("Отримати з порталу", function () {
            BtnGetFromApi(listview);
        });;
    },
};
