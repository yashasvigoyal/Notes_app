let initialState = {
    loading:false,
    error:false,
    data:[],

}

export const noteReducer =(state=initialState,action)=>{

    switch(action.type){
        case "NOTES_SUCCESS":{

            return {
                ...state , loading:true
            }
        }

        
        case "NOTES_ERROR":{
         
            return {
                ...state , loading:false ,error:true 
            }
        }
       

        default:{
            return initialState;
        }


    }

}