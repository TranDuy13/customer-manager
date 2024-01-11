import { axiosGet, axiosPost, axiosPut } from "./BaseService";

const defaultURL = "Banner";
export const CreateBanner = async (data) => {
    const _url = `${defaultURL}/create`;
    return axiosPost(_url, data);
};
export const getAllBanner = async () => {
    const _url = `${defaultURL}/getAll`;
    return axiosGet(_url);
};

export const updateBanner = async (id, body) => {
    const _url = `${defaultURL}/${id}`;
    return axiosPut(_url, body);
};