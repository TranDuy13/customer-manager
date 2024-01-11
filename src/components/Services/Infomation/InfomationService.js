import { axiosGet, axiosPost, axiosPut } from "../BaseService";

const defaultURL = "info";
export const Createinfo = async (data) => {
    const _url = `${defaultURL}/create`;
    return axiosPost(_url, data);
};
export const getAllinfo = async () => {
    const _url = `${defaultURL}/getAll`;
    return axiosGet(_url);
};

export const updateInfo = async (id, body) => {
    const _url = `${defaultURL}/${id}`;
    return axiosPut(_url, body);
};