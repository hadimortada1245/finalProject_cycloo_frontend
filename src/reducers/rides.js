const ridesReducer = (state = [], action) => {
    switch (action.type) {
      case "getCountRides":
        return action.payload;
        case "getAllRides":
        return action.payload;
      case "addRide":
        return [...state, action.payload];
      case "deleteRide":
        return state.filter((ride) => ride.id !== action.payload);
      case "updateRide":
        return state.map((ride) =>
          ride.id === action.payload.Id ? action.payload.ride : ride
        );
      default:
        return state;
    }
  };
  export default ridesReducer;