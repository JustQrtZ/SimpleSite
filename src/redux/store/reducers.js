import { combineReducers } from "redux";
import account from "../account/reducer";
import users from "../users/reducer"

export const reducers = combineReducers({
	account,
  users
});
