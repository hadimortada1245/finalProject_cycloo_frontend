import { combineReducers } from "redux";
import userReducer from "./user";
import totalUsersReducer from "./totalUsers";
import totalOrdersReducer from "./totalOrders";
import totalReportsReducer from "./totalReports";
import totalRequestsReducer from "./totalRequests";
import ridesReducer from "./rides";
const allReducers = combineReducers({
  users : userReducer,
  totalUsers: totalUsersReducer,
  totalOrders: totalOrdersReducer,
  totalReports: totalReportsReducer,
  totalRequests: totalRequestsReducer,
  rides: ridesReducer
});

export default allReducers;