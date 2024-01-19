import { combineReducers } from "redux";
import userReducer from "./user";
import totalUsersReducer from "./totalUsers";
const allReducers = combineReducers({
  users : userReducer,
  totalUsers: totalUsersReducer
});

export default allReducers;