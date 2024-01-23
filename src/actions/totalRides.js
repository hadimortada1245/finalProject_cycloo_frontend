import axios from "axios";
export const getCountRides = () => {
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