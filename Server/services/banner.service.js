const Banner = require('../models/Banner');
const Images = require('../models/Images');





const createProductType = async (body) => {
  try {
    const newProduct = new Banner(body);
    await newProduct.save();
    return {
      message: "Successfully create product",
      success: true,
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
    const existProduct = await Banner.findOne({ _id: id });
    if (!existProduct) {
      return {
        message: "Banner not exist",
        success: false,
      };
    }

    await Banner.deleteOne({ _id: id });

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
  deleteProductType,
};
