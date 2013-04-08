/*
Robert Warren
Term 1304
Mobile Interface and Usability (MIU)
I Owe, I Owe * Bill List

Dropbox: https://www.dropbox.com/sh/03yhmwxv5pmms41/4XEl9oEfZ8
Github: https://github.com/grindnmosh/Warren_Robert_1304_MIU.git
URL: http://grind-design.com
*/

var sampleBills = {
	"srp": {
		"btype": ["Bill Type: ", "Utilities"],
		"bname": ["Bill Name: ", "SRP"],
		"prio": ["Bill Priority: ", "5"],
		"amt": ["Bill Amount: $", "68.00"],
		"due": ["Bill Due Date: ", "2013-04-23"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", "Pay extra 30 to help with higher summer bills."]
	},
	"mesa": {
		"btype": ["Bill Type: ", "Utilities"],
		"bname": ["Bill Name: ", "City of Mesa"],
		"prio": ["Bill Priority: ", "4"],
		"amt": ["Bill Amount: $", "96.00"],
		"due": ["Bill Due Date: ", "2013-04-26"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "UnPaid"],
		"pdwith": ["Paid With: ", "N/A"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", " "]
	},
	"net": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "CenturyLink"],
		"prio": ["Bill Priority: ", "2"],
		"amt": ["Bill Amount: $", "60.00"],
		"due": ["Bill Due Date: ", "2013-04-14"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "Paid"],
		"pdwith": ["Paid With: ", "Visa"],
		"ontime": ["On Time?: ", "On Time"],
		"late": ["Late?: ", "N/A"],
		"lfee": ["Late Fee?: ", "N/A"],
		"textArea": ["comments: ", " "]
	},
	"cell": {
		"btype": ["Bill Type: ", "Personal"],
		"bname": ["Bill Name: ", "T-Mobile"],
		"prio": ["Bill Priority: ", "1"],
		"amt": ["Bill Amount: $", "281.00"],
		"due": ["Bill Due Date: ", "2013-04-08"],
		"freqs": ["Bill Frequency: ", "monthly"],
		"pd": ["Paid: ", "Paid"],
		"pdwith": ["Paid With: ", "Debit Card"],
		"ontime": ["On Time?: ", "N/A"],
		"late": ["Late?: ", "Late"],
		"lfee": ["Late Fee?: ", "Late Fee"],
		"textArea": ["comments: ", "$6 added to next Bill"]
	}

}