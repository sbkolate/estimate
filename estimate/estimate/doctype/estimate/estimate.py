# Copyright (c) 2013, Systematrix and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _, msgprint
from frappe.model.document import Document

class Estimate(Document):
        def validate(self):
	    #msgprint(self.net_total)
            self.calculate_net_total()
        
        def calculate_net_total(self):
		self.net_total = 0.0

		for item in self.estimate_line_item:
			self.net_total += item.amount

		self.round_floats_in(self, ["net_total"])
	
