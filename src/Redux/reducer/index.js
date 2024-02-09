import { combineReducers } from "redux";
import User from './User';
import Load from "./Load";
import Chat from "./Chat";

export default combineReducers({
   User,
   Load,
   Chat
})