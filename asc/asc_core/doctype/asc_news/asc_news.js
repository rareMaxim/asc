// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

frappe.ui.form.on("ASC News", {
    refresh(frm) {
        console.log(frappe);
        frm.trigger("add_publish_button");

    },
    title: function (frm) {
        frm.trigger("set_route");
    },
    category(frm) {
        frm.trigger("set_route");
    },
    set_route(frm) {
        // if (frm.doc.route) return;
        if (frm.doc.title && frm.doc.category) {
            frm.call("make_route").then((r) => {
                frm.set_value("route", r.message);
            });
        }
    },
    add_publish_button(frm) {
        frm.add_custom_button(frm.doc.published ? __("Unpublish") : __("Publish"), () => {
            frm.set_value("published", !frm.doc.published);
            frm.save();
        });
    },
});
