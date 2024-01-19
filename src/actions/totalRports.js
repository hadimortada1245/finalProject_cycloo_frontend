import axios from "axios";
export const getCountReports = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesReports/count`)
        .then((response) => {
          const totalReports=response.data.result[0].count;
          dispatch({
            type: "getCountReports",
            payload: totalReports,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };