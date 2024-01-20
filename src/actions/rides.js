import axios from "axios";
export const getCountRides = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/rides/count`)
        .then((response) => {
          const totalRides=response.data.result[0].count;
          dispatch({
            type: "getCountRides",
            payload: totalRides,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const getAllRides = () => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesJoining/getAllRides`)
        .then((response) => {
          const users = response.data.result;
          dispatch({
            type: "getAllRides",
            payload: users,
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