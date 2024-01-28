// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

function updateBirthDayAndGenre(frm) {
    frappe.require('/assets/frappe_ua/js/rnokpp.js', () => {
        data = rnokppInfo(frm.doc.codetax);
        if (data.error) {
            frappe.show_alert({
                message: __(data.error),
                indicator: 'orange'
            }, 5);
            return
        };
        if (!frm.doc.birthday) {
            frm.set_value('birthday', data.birthday);
        }
        // frm.set_value('sex', data.gender);

    })
};

frappe.ui.form.on("ASC Employees", {
    refresh(frm) {
        updateBirthDayAndGenre(frm);
    },
    codetax(frm) {
        updateBirthDayAndGenre(frm);
    }
});
