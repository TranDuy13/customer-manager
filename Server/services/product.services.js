const Product = require("../models/Product");

const getAllProduct = async () => {
    try {
        const product = await Product.find().sort({_id: -1})
        return {
            message: "Successfully get Product",
            success: true,
            data: product,
        };
    } catch (err) {
        return {
            message: "An error occurred",
            success: false,
        };
    }
};
const getProduct = async (id) => {
  console.log(id);
    try {
        const product = await Product.findById(id)
        if (!product)
            return {
                message: "Product no found!",
                success: false,
            };
        return {
            message: "Successfully get product",
            success: true,
            data: product,
        };
    } catch (error) {
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

const getProductBySeller = async (id) => {
    try {
        const product = await Product.find({ seller: id });
        if (!product)
            return {
                message: "Can't get product of seller!",
                success: false,
            };
        return {
            message: "Successfully get product",
            success: true,
            data: product,
        };
    } catch (error) {
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

const createProduct = async (body) => {
    try {
        const newProduct = new Product({
            name_product: body.name_product,
            from: body.from,
            types: body.types,
            code: body.code,
            description: body.detail,
            model: body.model,
            brand: body.brand,
            images: body.images
        });
        await newProduct.save();
        return {
            message: "Successfully create product",
            success: true,
            data: newProduct,
        };
    } catch (error) {
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

const updateProduct = async (id, body) => {
    try {
        //const newProduct = new Product(body)
        const existProduct = await Product.findOne({ _id: id });
        if (!existProduct) {
            return {
                message: "Product not exist",
                success: false,
            };
        }
        await existProduct.updateOne({ _id: id }, body);
        return {
            message: "Successfully update product",
            success: true,
            data: body,
        };
    } catch (error) {
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

const deleteProduct = async (id) => {
    try {
        const existProduct = await Product.findOne({ _id: id });
        if (!existProduct) {
            return {
                message: "Product not exist",
                success: false,
            };
        }

        await Product.deleteOne({ _id: id });

        return {
            message: "Successfully delete product",
            success: true,
        };
    } catch (error) {
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

module.exports = {
    createProduct,
    getProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    getProductBySeller,
};
