const initialState = {
    user:{},
    error:'',
}

const reducer = (state = initialState , action) => {
    const {type,payload} = action
    if(type == "SIGNUP"){
        // console.log("Payload" , payload)
        return { 
            ...state,
            user: {...payload},
            error:''
        }
    }
    if(type == "SIGNUP_ERROR"){
        return {
            ...state,
            error: payload
        }
    }
    if(type == "LOGIN"){
        return {
            ...state,
            user:{...payload},
            error:''
        }
    }
    if(type == "LOGIN_ERROR"){
        return {
            ...state,
            error: payload
        }
    }
    return state
}

export default reducer