const producttypeService = require("../services/producttype.service");
const controller = require("./controller");

const createProduct = async (req, res) => {
  try {
    const proService = await producttypeService.createProductType(req.body);
    if (!proService.success)
      return controller.sendError(res, proService.message, 400);
    return controller.sendSuccess(
      res,
      proService.data,
      200,
      proService.message
    );
  } catch (error) {
    return controller.sendError(res);
  }
};
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const proService = await producttypeService.getProduct(id);
    if (!proService.success)
      return controller.sendError(res, proService.message, 400);
    return controller.sendSuccess(
      res,
      proService.data,
      200,
      proService.message
    );
  } catch (error) {
    return controller.sendError(res);
  }
};
const getAllProductType = async (req, res) => {
  try {
    const productSer = await producttypeService.getAllProductType();
    if (!productSer.success)
      return controller.sendError(res, productSer.message, 400);
    controller.sendSuccess(res, productSer.data, 200, productSer.message);
  } catch (error) {
    controller.sendError(res);
  }
};
const updateProduct = async (req, res) => {
  try {
    const productSer = await producttypeService.updateProduct(
      req.params.id,
      req.body
    );
    if (!productSer.success)
      return controller.sendError(res, productSer.message, 400);
    return controller.sendSuccess(
      res,
      productSer.data,
      200,
      productSer.message
    );
  } catch (err) {
    return controller.sendError(res);
  }
};
const deleteProduct = async (req, res) => {
  try {
    const productSer = await producttypeService.deleteProduct(req.params.id);
    if (!productSer.success)
      return controller.sendError(res, productSer.message, 400);
    return controller.sendSuccess(res, {}, 200, productSer.message);
  } catch (error) {
    return controller.sendError(res);
  }
};
const getProductBySeller = async (req, res) => {
  try {
    const productSer = await producttypeService.getProductBySeller(req.params.id);
    if (!productSer.success)
      return controller.sendError(res, productSer.message, 400);
    return controller.sendSuccess(
      res,
      productSer.data,
      200,
      productSer.message
    );
  } catch (error) {
    return controller.sendError(res);
  }
};
module.exports = Controller = {
  createProduct,
  getProduct,
  getAllProductType,
  updateProduct,
  deleteProduct,
  getProductBySeller,
};
