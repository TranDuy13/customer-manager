import { createFormData } from "../../../utils/create-emotion-cache";
import { axiosGet, axiosPatch, axiosPost } from "../BaseService";

const defaultURL = "product";
export const CreateProduct = async (data) => {
    const _url = `${defaultURL}/create`;
    return axiosPost(_url, data, {
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

export const deleteRangeProduct = async(body)=>{
    const _url = `${defaultURL}/deleterange`;
    return axiosPatch(_url, body);
}