// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt
function fill_default_office(frm) {
    frappe.call({
        method: "asc.asc_core.doctype.asc_appeal.asc_appeal.get_office_by_user",
        args: { user: frappe.session.user },
        callback: (r) => {
            console.log(r);
            if (r.message) {
                frm.set_value("cnap_office", r.message.name);
            }
        }
    });
};

frappe.ui.form.on("ASC Appeal", {
    setup(frm) {
        if (!frm.doc.appeal_reg_date_time) {
            frm.set_value("appeal_reg_date_time", frappe.datetime.now_datetime());
        }
    },
    refresh(frm) {

        frm.set_query('service', function (doc) {
            return { filters: { published: 1 } }
        });

        fill_default_office(frm);
    },
    select_applicant: function (frm) {
        new frappe.ui.form.MultiSelectDialog({
            doctype: "ASC Applicant",
            size: 'large',
            target: frm,
            add_filters_group: 1,
            setters: [
                {
                    label: "День народження",
                    fieldname: "birth_day",
                    fieldtype: "Date"
                },
            ],
            get_query() {
                return {
                    filters: {}
                };
            },
            action(selections) {
                console.log(selections);
            }
        })
    },
});