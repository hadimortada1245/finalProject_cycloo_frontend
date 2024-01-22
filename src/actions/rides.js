import axios from "axios";

  export const getAllRides_d = () => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesJoining/getAllRides`)
        .then((response) => {
          const rides = response.data.result;
          dispatch({
            type: "getAllRides_d",
            payload: rides,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const deleteRide = (Id) => {
      return (dispatch) => {
        axios
          .delete(`${process.env.REACT_APP_API_URL}/rides/delete/${Id}`)
          .then((response) => {
            dispatch({
              type: "deleteRide",
              payload: Id,
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };
    };