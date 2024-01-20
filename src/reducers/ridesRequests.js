const ridesRequestsReducer = (state = [], action) => {
    switch (action.type) {
      case "getAllRequests":
        return action.payload;
      case "addRequest":
        return [...state, action.payload];
      case "deleteRequest":
        return state.filter((request) => request.id !== action.payload);
      case "updateRequest":
        return state.map((request) =>
          request.id === action.payload.Id ? action.payload.request : request
        );
      default:
        return state;
    }
  };
  export default ridesRequestsReducer;