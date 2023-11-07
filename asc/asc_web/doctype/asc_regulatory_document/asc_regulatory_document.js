// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

frappe.ui.form.on("ASC Regulatory Document", {
	refresh(frm) {

	},
	convocation(frm) {
		frm.trigger("set_route");
	},
	session(frm) {
		frm.trigger("set_route");
	},
	number(frm) {
		frm.trigger("set_route");
	},
	set_route(frm) {
		// if (frm.doc.route) return;
		if (frm.doc.convocation && frm.doc.session && frm.doc.number) {
			frm.call("make_route").then((r) => {
				frm.set_value("route", r.message);
			});
		}
	},
});
