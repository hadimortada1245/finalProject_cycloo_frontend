const totalRequestsReducer = (state = [], action) => {
    switch (action.type) {
      case "getCountRequests":
        return action.payload;
      default:
        return state;
    }
  };
  export default totalRequestsReducer;