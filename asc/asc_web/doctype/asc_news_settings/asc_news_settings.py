# Copyright (c) 2023, Максим Сисоєв and contributors
# For license information, please see license.txt

# import frappe
import frappe
from frappe.model.document import Document


class ASCNewsSettings(Document):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        allow_guest_to_comment: DF.Check
        browse_by_category: DF.Check
        comment_limit: DF.Int
        enable_social_sharing: DF.Check
        like_limit: DF.Int
        title: DF.Data | None
    # end: auto-generated types
    pass


def get_like_limit():
    return frappe.db.get_single_value("ASC News Settings", "like_limit") or 5


def get_comment_limit():
    return frappe.db.get_single_value("ASC News Settings", "comment_limit") or 5
