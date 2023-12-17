import { axiosGet, axiosPost } from "../BaseService";

const defaultURL = "product";
export const CreateProduct = async (data) => {
    const _url = `${defaultURL}/create`;
    return axiosPost(_url, data);
};
export const getAllProduct = async () => {
    const _url = `${defaultURL}/getAll`;
    return axiosGet(_url);
};
export const getProductById = async (id) => {
    const _url = `${defaultURL}/get/${id}`;
    return axiosGet(_url);
};