const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);
module.exports = mongoose.model('Admin', Admin);
