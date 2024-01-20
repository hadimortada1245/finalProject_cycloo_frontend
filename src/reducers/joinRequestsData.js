import { act } from "react-dom/test-utils";

const joinRequestsDataReducer = (state = [], action) => {
    switch (action.type) {
      case "getJoinRequestsData":
        return action.payload;
      case "deleteJoinRequest":
         return state.filter((request) =>request.id !== action.payload);
      case "acceptJoinRequest":
         return state.filter((request) =>request.id !== action.payload);
        default:
        return state;
    }
  };
  export default joinRequestsDataReducer;