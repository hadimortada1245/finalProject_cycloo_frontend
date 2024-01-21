const totalProductsReducer = (state = [], action) => {
    switch (action.type) {
      case "getCountProducts":
        return action.payload;
      case "reduceTotalProducts":
        return state-1;
      case "increaseTotalProducts":
        return state+1;
      default:
        return state;
    }
  };
  export default totalProductsReducer;