import { axiosGet, axiosPost } from "../BaseService";

const defaultURL = "producttype";
export const CreateProductType = async (data) => {
    const _url = `${defaultURL}/create`;
    return axiosPost(_url, data);
};
export const getAllProductType = async () => {
    const _url = `${defaultURL}/getAll`;
    return axiosGet(_url);
};
