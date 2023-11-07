// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

function UpdateServiceFromDiia(frm, service_id) {
	frappe.call({
		method: "asc.asc_diia.diia_api.diia_register_getDetail",
		args: { service_id: service_id },
		callback: (r) => {
			frappe.show_alert("Level 1 = ok");
			frappe.call({
				method: "asc.asc_diia.doctype.asc_diia_api.asc_diia_api.download_dump",
				args: { id: service_id },
				callback: (r) => {
					frm.reload_doc();
					frappe.show_alert("Level 2 = ok");

				}
			});
		}
	});
}

frappe.ui.form.on("ASC Service", {
	refresh(frm) {
		frm.add_custom_button(__('Оновити з порталу Дія'), function () {
			UpdateServiceFromDiia(frm, frm.doc.name)
		}, __("Портал Дія"));
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
	},
	identifier(frm) {
		frm.trigger("set_route");
	},
	set_route(frm) {
		// if (frm.doc.route) return;
		if (frm.doc.identifier) {
			frm.call("make_route").then((r) => {
				frm.set_value("route", r.message);
			});
		}
	},
});
