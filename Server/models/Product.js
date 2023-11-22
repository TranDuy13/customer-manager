const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
	{
		name_product: {
			type: String,
			required: true,
		},
		from: {
			type: String,
			required: true,
		},
		images: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'Images',
				required: true,
			},
		],
		type: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'ProducType',
			required: true,
		},
		code: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		model: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);
Product.pre(/^find/, function (next) {
	this.populate({
		path: 'type',
	});
	next();
});
Product.pre(/^find/, function (next) {
	this.populate({
		path: 'images',
	});
	next();
});
module.exports = mongoose.model('Product', Product);
