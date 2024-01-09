import axios, { AxiosRequestConfig } from "axios";
import { configEnv2 } from ".";
const AxiosInstance = axios.create({
    baseURL: configEnv2,
    timeout: 3000,
    headers: {"Access-Control-Allow-Origin": "*"}
});
AxiosInstance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("_tok3n");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);
export function handleAxiosError(error) {
    if (error.response) {
        if (error.response.status === 401 || error.response.statusText === "Unauthorized") {
            window.location.replace("http://hsthuyhoang.com/");
        }
        return error.response;
    } else {
        if (error.status === 401) {
            window.location.replace("http://hsthuyhoang.com/");
        }
        return error;
    }
}
export const axiosGet = async (url, config) => {
    try { 
        const data = await AxiosInstance.get(url, config);
        return data;
    } catch (error) {
        return handleAxiosError(error);
    }
};
export const axiosPost = async (url, body,config) => {
    try { 
        const data = await AxiosInstance.post(url,body, config);
        return data;
    } catch (error) {
        return handleAxiosError(error);
    }
};
export const axiosDelete = async (url, body,config) => {
    try { 
        const data = await AxiosInstance.delete(url, config);
        return data;
    } catch (error) {
        return handleAxiosError(error);
    }
};
