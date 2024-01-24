const productReducer = (state = [], action) => {
    switch (action.type) {
      case "getAllProducts":
        return action.payload;
      case "getThreeProducts":
        return action.payload;
      case "getProductsByType":
        return action.payload;
      case "getProductsBySearch":
        return action.payload;
      case "addProduct":
        return [...state, action.payload];
      case "deleteProduct":
        return state.filter((product) => product.id !== action.payload);
      case "updateProduct":
        return state.map((product) =>
          product.id === action.payload.Id ? action.payload.updatedProduct : product
        );
      default:
        return state;
    }
  };
  export default productReducer;