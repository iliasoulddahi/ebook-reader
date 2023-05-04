import { combineReducers } from "redux";
import authReducer from "./authReducer";
import eBookReducer from "./eBookReducer";

export const rootReducer = combineReducers({
    auth:authReducer,
    ebooks:eBookReducer
}) 