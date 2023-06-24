import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import { noteReducer } from "./noteReducer";

export const combineReducer = combineReducers({
    userReducer:userReducer,
    noteReducer:noteReducer
});