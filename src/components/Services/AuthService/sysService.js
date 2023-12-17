import { axiosGet, axiosPost } from "../BaseService"

const defaultURL ='auth'
export const LoginAdmin = async(username, password)=>{
const _url = `${defaultURL}/login`
    return axiosPost(_url,{
        username: username,
        password: password
    })
}
export const Verify = async()=>{
    const _url = `${defaultURL}/getAuth`
        return axiosGet(_url)
    }