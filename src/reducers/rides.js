const ridesReducer = (state = [], action) => {
    switch (action.type) {
        case "getAllRides":
        return action.payload;
        case "getAllRides_d":
        return action.payload;
      case "addRide":
        return [...state, action.payload];
      case "deleteRide":
        return state.filter((ride) => ride.id !== action.payload);
      case "updateRide":
        return state.map((ride) =>
          ride.id === action.payload.Id ? action.payload.updatedRide : ride
        );
      case "updateRideStatus":
        return state.map((ride) =>
          ride.id === action.payload.Id ? action.payload.updatedRide : ride
        );
      default:
        return state;
    }
  };
  export default ridesReducer;