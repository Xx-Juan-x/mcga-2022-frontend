import {combineReducers} from "redux";
import productsReducer from "./products/reducer";

// Si agregamos proveedores lo agregamos ahí
const rootReducer = combineReducers({
    products: productsReducer
})

export default rootReducer;