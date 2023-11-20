import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

//register
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// Login

export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

// add project

export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}