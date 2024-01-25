const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "getCartData":
        return action.payload;
      case "addToCart":
        return [...state, action.payload];
      case "removeFromCart":
        return state.filter((item) => item.userId !== action.payload.userId && item.productId !== action.payload.productId);
      default:
        return state;
    }
  };
  export default cartReducer;