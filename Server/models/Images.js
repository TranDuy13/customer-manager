const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Images = new Schema(
	{
		data: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);
module.exports = mongoose.model('Images', Images);
