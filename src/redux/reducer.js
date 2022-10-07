const storeDataReducer = (state = {} , action) =>{
    if(action.type === "storeData"){
        const {name,username , token} = action.payload
        sessionStorage.setItem("state" , JSON.stringify({...state , name , username , token}))
        return {
            ...state , name , username , token
        }
    }
}

export default storeDataReducer