const adminService = require("../services/admin.services");
const controller = require("./controller");

const register = async (req, res) => {
  try {
    const resAuth = await adminService.register(req.body);
    if (!resAuth.success)
      return controller.sendError(res, resAuth.message, 400);
    return controller.sendSuccess(res, resAuth.data, 200, resAuth.message);
  } catch (error) {
    return controller.sendError(res);
  }
};
const login = async (req, res) => {
  try {
    const resServices = await adminService.login(req.body);
    if (!resServices.success)
      return controller.sendError(res, resServices.message, 400);
    return controller.sendSuccess(res, resServices.data, 200, resServices.message);
  } catch (error) {
    return controller.sendError(res);
  }
};

const getAuth = async (req, res) => {
  try {
    const body = req.value.body;
    const CheckData = await adminService.getAuth(body.decodeToken.data);
    if (!CheckData) return controller.sendError(res, CheckData.message, 400);
    return controller.sendSuccess(res, CheckData.data, 200, CheckData.message);
  } catch (error) {
    return controller.sendError(res);
  }
};



module.exports = Controller = {
  register,
  login,
  getAuth,
};
