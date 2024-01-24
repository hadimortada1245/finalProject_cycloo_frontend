const totalOrdersReducer = (state = [], action) => {
    switch (action.type) {
      case "getCountOrders":
        return action.payload;
      case "getCountOrdersByUserId":
        return action.payload;
      default:
        return state;
    }
  };
  export default totalOrdersReducer;