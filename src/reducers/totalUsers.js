const userReducer = (state = [], action) => {
    switch (action.type) {
      case "getCountUser":
        return action.payload;
      default:
        return state;
    }
  };
  export default userReducer;