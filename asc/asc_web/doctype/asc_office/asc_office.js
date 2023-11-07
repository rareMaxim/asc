// Copyright (c) 2023, Максим Сисоєв and contributors
// For license information, please see license.txt


function set_fields_from_api(frm, json) {
    let obj = JSON.parse(json);
    // console.log(obj);
    if (obj.address.lat != null) {
        frm.set_value({
            'latitude': obj.address.lat,
            'longitude': obj.address.lon,
        });
        updateGeolocation(frm, obj.address.lat, obj.address.lon);
    }
    frm.set_value({
        'title': obj.name,
        'status': obj.state,
        'address': obj.address.address_full,
        'formation_form': obj.formation_form,
        'workers_total': obj.workers_total,
        'square_total': obj.square_total,
        'timetable': obj.timetable,
        'tel_consul': obj.tel_consul,
        'onl_consul': obj.onl_consul,
        'bus_100': obj.bus_100,
        'free_parking': obj.free_parking,
        'e_registr': obj.e_registr,
        'bank_branc': obj.bank_branc,
        'pay_card': obj.pay_card,
        'pay_terminal': obj.pay_terminal,
        'add_serv': obj.add_serv,
        'free_wifi': obj.free_wifi,
        'self_serv': obj.self_serv,
        'sanit_room': obj.sanit_room,
        'disability': obj.disability,
        'pandus': obj.pandus,
        'dis_sanit': obj.dis_sanit,
        'braille_mat': obj.braille_mat,
        'pram_place': obj.pram_place,
        'feedback_url': obj.feedback_url,
    });
    frappe.show_alert({
        message: __('Успішно завантажено з порталу. Не забудь сберігти зміни 😉'),
        indicator: 'green'
    }, 8);
}

function updateGeolocation(frm, lat, lon) {
    let map = frm.fields_dict.location.map;
    map.setView([lat, lon], 13);
    new L.marker([lat, lon])
        // .bindPopup(key)
        .addTo(map);
}
function add_toolbar_buttons(frm) {
    frm.add_custom_button('Отримати з порталу', () => {
        frappe.call({
            type: "GET",
            method: "asc.asc_web.doctype.asc_office.asc_office.get_from_api",
            args: {
                'asc_code': frm.doc.asc_id
            },
            callback: function (r) {
                set_fields_from_api(frm, r.message)
            }
        });
    });
};

frappe.ui.form.on("ASC Office", {
    refresh(frm) {
        add_toolbar_buttons(frm);
        updateGeolocation(frm, frm.doc.latitude, frm.doc.longitude)
    },
});
