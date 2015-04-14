cur_frm.cscript.image = function() {
	refresh_field("image_view");

	if(!cur_frm.doc.image) return;

	if(!cur_frm.doc.description_html)
		cur_frm.cscript.add_image(cur_frm.doc);
	else {
		msgprint(__("You may need to update: {0}", [frappe.meta.get_docfield(cur_frm.doc.doctype, "description_html").label]));
	}
};
cur_frm.cscript.add_image = function(doc, dt, dn) {
	if(!doc.image) {
		msgprint(__('Please select an "Image" first'));
		return;
	}

	doc.description_html = repl('<table style="width: 100%; table-layout: fixed;">' +
		'<tr><td style="width:110px"><img src="%(imgurl)s" width="100px"></td>' +
		'<td>%(desc)s</td></tr>' +
		'</table>', {imgurl: frappe.utils.get_file_link(doc.image), desc:doc.description});

	refresh_field('description_html');
}
