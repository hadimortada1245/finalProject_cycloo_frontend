import { combineReducers } from "redux";
import userReducer from "./user";
import totalUsersReducer from "./totalUsers";
import totalOrdersReducer from "./totalOrders";
import totalReportsReducer from "./totalReports";
import totalRequestsReducer from "./totalRequests";
import joinRequestsReducer from "./joinRequestsData";
import totalProductsReducer from "./totalProducts";
import totalRidesReducer from "./totalRides";
import ridesRequestsReducer from "./ridesRequests";
import productReducer from "./products";
import ridesReducer from "./rides";
import reportsReducer from "./reports";
const allReducers = combineReducers({
  users : userReducer,
  totalUsers: totalUsersReducer,
  totalOrders: totalOrdersReducer,
  totalReports: totalReportsReducer,
  totalRequests: totalRequestsReducer,
  joinRequests: joinRequestsReducer,
  totalProducts: totalProductsReducer,
  totalRides: totalRidesReducer,
  ridesRequests: ridesRequestsReducer,
  products: productReducer,
  reports: reportsReducer,
  rides: ridesReducer
});

export default allReducers;