const mongoose = require("mongoose");
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
        types: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "ProducType",
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
		brand: {
            type: String,
            required: true,
        },
		images: [String],
        model: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
Product.pre(/^find/, function (next) {
    this.populate({
        path: "types",
    });
    next();
});
// Product.pre(/^find/, function (next) {
//     this.populate({
//         path: "images",
//     });
//     next();
// });
module.exports = mongoose.model("Product", Product);
