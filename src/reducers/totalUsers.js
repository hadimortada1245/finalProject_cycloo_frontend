const totalUserReducer = (state = [], action) => {
    switch (action.type) {
      case "getCountUsers":
        return action.payload;
      case "reduceTotalUsers":
        return state-1;
      default:
        return state;
    }
  };
  export default totalUserReducer;