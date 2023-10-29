// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

frappe.ui.form.on("ASC Service", {
	refresh(frm) {

	},
	thematic_area(frm) {
		frm.set_query('sector', function (doc) {
			if (doc.thematic_area) {
				return { filters: { theme: frm.doc.thematic_area } }
			}
			else {
				return { filters: {} }
			}
		})
	},
	sector(frm) {
		frappe.db.get_value("ASC Diia Category", { name: frm.doc.sector }, "theme",
			(r) => {
				if (r && r.theme) {
					frm.set_value("thematic_area", r.theme);
				}
			}
		);

		
	}
});
