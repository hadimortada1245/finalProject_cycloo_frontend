const totalReportsReducer = (state = [], action) => {
    switch (action.type) {
      case "getCountReports":
        return action.payload;
      default:
        return state;
    }
  };
  export default totalReportsReducer;