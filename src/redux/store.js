import { createStore } from "redux";
import storeDataReducer from "./reducer";

const store = createStore(storeDataReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store