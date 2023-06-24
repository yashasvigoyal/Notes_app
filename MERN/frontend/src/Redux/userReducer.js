
const initialState = {
    user:{
        token:null,
        auth:false,
        loading:false,
        error:false
    }
}

export const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {
                ...state,user:action.payload
            };
        case "LOGIN_ERROR":
            return initialState;
        default:
            return initialState;
    }
}