// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

frappe.ui.form.on("ASC News", {
    refresh(frm) {
        console.log(frappe);

    },
    title: function (frm) {
        frm.trigger("set_route");
    },
    set_route(frm) {
        if (frm.doc.route) return;
        if (frm.doc.title) {
            frm.call("make_route").then((r) => {
                frm.set_value("route", r.message);
            });
        }
    },
});
