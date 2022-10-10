
let initialState = {
    ...JSON.parse(sessionStorage.getItem('state'))
}

const storeDataReducer = (state = initialState , action) =>{
    if(action.type === "storeData"){
        return {
            ...JSON.parse(sessionStorage.getItem('state'))
        }
    }
    else if(action.type === 'logout'){
        sessionStorage.clear()
        return {}
    }
    else return state
}

export default storeDataReducer