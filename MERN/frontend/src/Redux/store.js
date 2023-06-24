import {createStore} from "redux";
import { combineReducer } from "./combineReducer";
import { noteReducer } from "./noteReducer";

export const store = createStore(
    combineReducer)