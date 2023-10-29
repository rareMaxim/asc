// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

frappe.ui.form.on("ASC Service", {
	refresh(frm) {

	},
	thematic_area(frm) {
		frm.set_query('sector', function (doc) {
			if (doc.thematic_area) {
				return { filters: { thematic_area: frm.doc.thematic_area } }
			}
			else {
				return { filters: {} }
			}
		})
	},
	sector(frm) {
		frappe.db.get_value("ASC Diia Category", { name: frm.doc.sector }, "thematic_area",
			(r) => {
				if (r && r.thematic_area) {
					frm.set_value("thematic_area", r.thematic_area);
				}
			}
		);

		
	}
});
