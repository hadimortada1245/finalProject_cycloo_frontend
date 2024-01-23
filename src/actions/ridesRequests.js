import axios from "axios";
export const getRidesRequestsData = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesRequests/getRequestData`)
        .then((response) => {
          const requestsData=response.data.result;
          dispatch({
            type: "getRidesRequestsData",
            payload: requestsData,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const deleteRideRequest = (Id) => {
    return (dispatch) => {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/ridesRequests/delete/${Id}`)
        .then((response) => {
          dispatch({
            type: "deleteRideRequest",
            payload: Id,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
