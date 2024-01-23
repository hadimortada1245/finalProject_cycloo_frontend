const ridesRequestsReducer = (state = [], action) => {
    switch (action.type) {
      case "getRidesRequestsData":
        return action.payload;
      case "addRideRequest":
        return [...state, action.payload];
      case "deleteRideRequest":
        return state.filter((request) => request.id !== action.payload);
      default:
        return state;
    }
  };
  export default ridesRequestsReducer;