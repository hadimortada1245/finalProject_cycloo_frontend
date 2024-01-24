const totalRidesReducer = (state = [], action) => {
    switch (action.type) {
        case "getCountRides":
            return action.payload;
        case "getCountRidesByUserId":
            return action.payload;
      default:
        return state;
    }
  };
  export default totalRidesReducer;