const totalRequestsReducer = (state = [], action) => {
    switch (action.type) {
      case "getCountRequests":
        return action.payload;
      case "reduceTotal":
        return state-1;
      default:
        return state;
    }
  };
  export default totalRequestsReducer;