// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt

function UpdateServiceFromDiia(frm) {
	frappe.call({
		method: "asc.asc_diia.doctype.asc_diia_api.asc_diia_api.download_dump",
		// args: { service_id: service_id },
		callback: (r) => {
			if (r) {
				frappe.show_alert(r.message, 15);
			}
		}
	});
}

frappe.ui.form.on("ASC Diia Api", {
	refresh(frm) {

	},
	diia_dump_download(frm) {
		UpdateServiceFromDiia(frm)
	},
});
