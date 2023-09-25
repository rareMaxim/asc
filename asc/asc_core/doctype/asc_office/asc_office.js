// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

function set_fields_from_api(frm, json) {
    let obj = JSON.parse(json);
    frm.set_value('title', obj.name);    
}

function add_toolbar_buttons(frm) {
    frm.add_custom_button('Отримати з порталу', () => {
        frappe.call({
            type: "GET",
            method: "asc.asc_core.doctype.asc_office.asc_office.get_from_api",
            args: {
                'asc_code': frm.doc.asc_id
            },
            callback: function (r) {
                set_fields_from_api(frm, r.message)
            }
        })
    });
    frm.change_custom_button_type('Отримати з порталу', null, 'primary');
};

frappe.ui.form.on("ASC Office", {
    refresh(frm) {
        add_toolbar_buttons(frm);
    },
});
