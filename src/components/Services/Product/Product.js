import { createFormData } from "../../../utils/create-emotion-cache";
import { axiosGet, axiosPost } from "../BaseService";

const defaultURL = "product";
export const CreateProduct = async (data) => {
    const _url = `${defaultURL}/create`;
    debugger

    const new_formData = createFormData(data)
    return axiosPost(_url, new_formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};
export const getAllProduct = async () => {
    const _url = `${defaultURL}/getAll`;
    return axiosGet(_url);
};
export const getProductById = async (id) => {
    const _url = `${defaultURL}/${id}`;
    return axiosGet(_url);
};