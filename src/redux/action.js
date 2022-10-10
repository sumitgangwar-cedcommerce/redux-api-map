import { LOG_OUT, STORE_DATA } from "./actionType"

export const saveData =() => {
    return {
        type : STORE_DATA,
    }
}

export const logOut = () =>{
    return {
        type : LOG_OUT
    }
}

