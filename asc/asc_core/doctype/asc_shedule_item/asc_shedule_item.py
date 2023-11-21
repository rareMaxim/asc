# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
import json
import frappe
from frappe.model.document import Document
from frappe.utils.data import (
    add_days,
    add_months,
    cint,
    cstr,
    date_diff,
    get_datetime_str,
    getdate,
)

weekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
]


class ASCSheduleItem(Document):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        all_day: DF.Check
        color: DF.Color | None
        employee: DF.Link | None
        ends_on: DF.Time | None
        event_type: DF.Link | None
        friday: DF.Check
        is_work: DF.Check
        monday: DF.Check
        repeat_on: DF.Literal["", "Daily", "Weekly", "Monthly", "Yearly"]
        repeat_this_event: DF.Check
        repeat_till: DF.Date | None
        saturday: DF.Check
        start_date: DF.Date | None
        starts_on: DF.Time | None
        sunday: DF.Check
        thursday: DF.Check
        title: DF.Data | None
        tuesday: DF.Check
        wednesday: DF.Check
    # end: auto-generated types
    pass


class ASCEventManager(object):
    add_events = []
    remove_events = []
    start = None
    end = None
    user = None
    for_reminder = False
    filters = None
    repeat = ""

    def __init__(self, start, end, user=None, for_reminder=False, filters=None):
        self.start = start.split(" ", 1)[0]
        self.end = end.split(" ", 1)[0]
        self.user = frappe.session.user if not user else user
        self.for_reminder = for_reminder
        filters = json.loads(filters) if isinstance(filters, str) else filters

        print(
            f"start: {start}, end: {end}, user: {user}, for_reminder: {for_reminder}, filters:{filters}"
        )

    def add_event(self, e, date):
        new_event = e.copy()
        new_event.start_date = date
        self.add_events.append(new_event)

    def get_events(self) -> list[frappe._dict]:
        events = frappe.get_all("ASC Shedule Item", fields=["*"], filters=self.filters)
        print(f"original events count: {len(events)}")
        self.build_repeated_event(events)
        print(f"repeat events count: {len(events)}")
        for e in self.remove_events:
            events.remove(e)
        print(f"before events count: {len(events)}")
        events = events + self.add_events
        print(f"total events count: {len(events)}")
        return events

    def build_repeated_event(self, events):
        for e in events:
            if e.repeat_this_event:
                # e.starts_on = get_datetime_str(e.starts_on)
                # e.ends_on = get_datetime_str(e.ends_on) if e.ends_on else None
                self.repeat = (
                    "3000-01-01" if cstr(e.repeat_till) == "" else e.repeat_till
                )
                if e.repeat_on == "Daily":
                    self.build_event_repeat_by_day(e)

                elif e.repeat_on == "Weekly":
                    self.build_event_repeat_by_weekly(e)

                elif e.repeat_on == "Monthly":
                    self.build_event_repeat_by_month(e)

    def build_event_repeat_by_day(self, e):
        for cnt in range(date_diff(self.end, self.start) + 1):
            date = add_days(self.start, cnt)
            if (
                getdate(date) >= getdate(e.start_date)
                and getdate(date) <= getdate(self.end)
                and getdate(date) <= getdate(self.repeat)
            ):
                self.add_event(e, date)
        self.remove_events.append(e)

    def build_event_repeat_by_weekly(self, event) -> list:
        print(f"Enter build_event_repeat_by_weekly")
        for cnt in range(date_diff(self.end, self.start) + 1):
            date = add_days(self.start, cnt)
            can_add = (
                getdate(date) >= getdate(self.start)
                and getdate(date) <= getdate(self.end)
                and getdate(date) <= getdate(self.repeat)
                and getdate(date) >= getdate(event.start_date)
                and event[  # The above code is not doing anything. It is just a single line of code that says
                    # "weekdays".
                    weekdays[getdate(date).weekday()]
                ]
            )
            print(f"can add {can_add}")
            if can_add:
                self.add_event(event, date)
        self.remove_events.append(event)

    def build_event_repeat_by_month(self, e):
        # creates a string with date (27) and month (07) and year (2019) eg: 2019-07-27
        year, month = self.start.split("-", maxsplit=2)[:2]
        date = f"{year}-{month}-" + e.start_date.split("-", maxsplit=3)[2]

        # last day of month issue, start from prev month!
        try:
            getdate(date)
        except Exception:
            date = date.split("-")
            date = date[0] + "-" + str(cint(date[1]) - 1) + "-" + date[2]

        start_from = date
        for i in range(int(date_diff(self.end, self.start) / 30) + 3):
            if (
                getdate(date) >= getdate(self.start)
                and getdate(date) <= getdate(self.end)
                and getdate(date) <= getdate(self.repeat)
                and getdate(date) >= getdate(e.start_date)
            ):
                self.add_event(e, date)

            date = add_months(start_from, i + 1)
        self.remove_events.append(e)


@frappe.whitelist()
def get_events(
    start, end, user=None, for_reminder=False, filters=None
) -> list[frappe._dict]:
    event_manager = ASCEventManager(start, end, user, for_reminder, filters)
    return event_manager.get_events()
