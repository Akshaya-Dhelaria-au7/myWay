import Axios from 'axios';
import {Backend_Url} from '../../Backend_Deployed/backend_deployed'

export const signup = (userData) => {
    return{
        type:"SIGNUP",
        payload:userData
    }
}

export const signup_error = (error) => {
    return {
        type:"SIGNUP_ERROR",
        payload:error
    }
}

export const login = (userData) => {
    return{
        type:"LOGIN",
        payload:userData
    }
}

export const login_error = (error) => {
    return {
        type:"LOGIN_ERROR",
        payload:error
    }
}

export const fetchSignupApi = (userInfo) => {
    return function(dispatch){
        Axios.post(`${Backend_Url}/signup`,userInfo)
        .then(response => {
            // console.log("Data in signup" , response.data.data)
            dispatch(signup(response.data.data))
        })
        .catch(error => {
            // console.log("Error in signup" , error.response)
            dispatch(signup_error(error.response.data.error))
        })
    }
}

export const fetchLoginApi = (userInfo) => {
    return function(dispatch){
        Axios.post(`${Backend_Url}/login`,userInfo)
        .then(response => {
            console.log("Data in Login" , response.response)
            dispatch(login(response.response))
        })
        .catch(error => {
            console.log("Error in Login" , error.response.data.message)
            dispatch(login_error(error.response.data.message))
        })
    }
}