const totalProductsReducer = (state = [], action) => {
    switch (action.type) {
      case "getCountProducts":
        return action.payload;
      default:
        return state;
    }
  };
  export default totalProductsReducer;