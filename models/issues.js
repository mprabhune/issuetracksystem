const mongoose = require('mongoose');

const IssueSchema = mongoose.Schema({
	issuename:{
		type: String,
		required: true
	},
	summary: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	assignedby: {
		type: String,
		required: true
	},
	regionname: {
		type: String,
		required: true
	},	
	resolution: {
		type: String,
		required: true
	}
});

const Issue = module.exports = mongoose.model('Issue',IssueSchema);