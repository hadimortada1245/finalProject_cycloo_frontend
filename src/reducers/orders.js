
const ordersReducer = (state = [], action) => {
    switch (action.type) {
      case "getOrdersByUserId":
        return action.payload;
      case "getOrders":
        return action.payload;
      case "updateOrders":
        return state.map((order) =>
        order.id === action.payload.Id ? action.payload.order : order
        );
      default:
        return state;
    }
  };
  export default ordersReducer;