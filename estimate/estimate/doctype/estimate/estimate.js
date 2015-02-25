// Module ESTIMATE	
frappe.provide("estimate.estimate");
cur_frm.add_fetch('item_code','description','description');
cur_frm.add_fetch('item_code','item_name','item_name');
cur_frm.add_fetch('item_code','rate','rate');
cur_frm.add_fetch('item_code','unit_of_measure','unit_of_measure');


cur_frm.cscript.tname = "Estimate Line Item";
cur_frm.cscript.fname = "estimate_line_item";


estimate.estimate.EstimateController = frappe.ui.form.Controller.extend({
        rate: function(doc, cdt, cdn) {
		var item = frappe.get_doc(cdt, cdn);
		//frappe.model.round_floats_in(item, ["rate", "price_list_rate"]);

		/*if(item.price_list_rate) {
			item.discount_percentage = flt((1 - item.rate / item.price_list_rate) * 100.0,
				precision("discount_percentage", item));
		} else {
			item.discount_percentage = 0.0;
		}

		this.calculate_taxes_and_totals();*/
                var amount = item.qty*item.rate;
                frappe.model.set_value(cdt, cdn, "amount", amount);               
	},
	calculate_net_total: function() {
		var me = this;

		this.frm.doc.net_total = 0.0;
		$.each(this.frm.item_doclist, function(i, item) {
			me.frm.doc.net_total += item.amount;
		});

		frappe.model.round_floats_in(this.frm.doc, ["net_total"]);
	},
        qty: function(doc, cdt, cdn) {
		var item = frappe.get_doc(cdt, cdn);
                var amount = item.qty*item.rate;
                frappe.model.set_value(cdt, cdn, "amount", amount);             
	},
       
});

cur_frm.cscript = new estimate.estimate.EstimateController({frm: cur_frm});
