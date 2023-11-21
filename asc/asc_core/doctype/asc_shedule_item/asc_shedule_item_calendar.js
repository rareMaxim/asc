frappe.views.calendar["ASC Shedule Item"] = {
	field_map: {
		start: "starts_on",
		end: "ends_on",
		id: "name",
		allDay: "all_day",
		title: "title",
		status: "event_type",
		color: "color",
	},
	style_map: {
		Public: "success",
		Private: "info",
	},
	get_events_method: "asc.asc_core.doctype.asc_shedule_item.asc_shedule_item.get_events",
};
