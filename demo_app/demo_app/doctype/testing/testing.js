// Copyright (c) 2024, fds and contributors
// For license information, please see license.txt

frappe.ui.form.on("testing", {
	refresh(frm) {
        frm.add_custom_button(__('Get User Email Address'), function(){
            frappe.msgprint('hi this is new email');
        }
)},
});
