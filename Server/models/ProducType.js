const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProducType = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);
module.exports = mongoose.model('ProducType', ProducType);
