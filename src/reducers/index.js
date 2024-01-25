import { combineReducers } from "redux";
import userReducer from "./user";
import totalUsersReducer from "./totalUsers";
import totalOrdersReducer from "./totalOrders";
import totalReportsReducer from "./totalReports";
import totalRequestsReducer from "./totalRequests";
import joinRequestsReducer from "./joinRequestsData";
import totalProductsReducer from "./totalProducts";
import totalLikessReducer from "./totalLikes";
import totalRidesReducer from "./totalRides";
import ridesRequestsReducer from "./ridesRequests";
import productReducer from "./products";
import ridesReducer from "./rides";
import reportsReducer from "./reports";
import cartReducer from "./cart";
const allReducers = combineReducers({
  users : userReducer,
  totalUsers: totalUsersReducer,
  totalOrders: totalOrdersReducer,
  totalReports: totalReportsReducer,
  totalRequests: totalRequestsReducer,
  joinRequests: joinRequestsReducer,
  totalProducts: totalProductsReducer,
  totalRides: totalRidesReducer,
  totalLikes: totalLikessReducer,
  ridesRequests: ridesRequestsReducer,
  products: productReducer,
  reports: reportsReducer,
  cart: cartReducer,
  rides: ridesReducer
});

export default allReducers;