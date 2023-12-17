const Product = require('../models/Product');
const ProductType = require("../models/ProducType");

const getAllProductType = async () => {
  try {
    console.log(12313123);
    const product = await ProductType.find({});
    return {
      message: "Successfully get ProductType",
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

const getProductByProductType = async (id) => {
  try {
    console.log(id);
    const product = await Product.findOne({ type: id });
    if (!product)
      return {
        message: "ProductType no found!",
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



const createProductType = async (body) => {
  try {
    const checkExits = await ProductType.findOne({name: body.type})
    if(checkExits){
      return {
        message: "An error occurred",
        success: false,
      };
    }
    const newProduct = new ProductType({name: body.type});
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

const updateProductType = async (id, body) => {
  try {
    //const newProduct = new ProductType(body)
    const existProduct = await ProductType.findOne({ _id: id });
    if (!existProduct) {
      return {
        message: "ProductType not exist",
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

const deleteProductType = async (id) => {
  try {
    const existProduct = await ProductType.findOne({ _id: id });
    if (!existProduct) {
      return {
        message: "ProductType not exist",
        success: false,
      };
    }

    await ProductType.deleteOne({ _id: id });

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
  createProductType,
  getProductByProductType,
  getAllProductType,
  updateProductType,
  deleteProductType,
};
