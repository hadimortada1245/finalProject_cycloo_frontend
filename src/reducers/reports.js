const reportsReducer = (state = [], action) => {
    switch (action.type) {
      case "getAllReports":
        return action.payload;
      case "addReport":
        return [...state, action.payload];
      case "deleteReport":
        return state.filter((report) => report.id !== action.payload);
      default:
        return state;
    }
  };
  export default reportsReducer;