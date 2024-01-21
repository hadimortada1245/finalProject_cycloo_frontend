import axios from "axios";
export const getAllReports = () => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesReports/getReportsData`)
        .then((response) => {
          const reports = response.data.result;
          dispatch({
            type: "getAllReports",
            payload: reports,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const deleteReport = (user_id,ride_id,Id) => {
    return (dispatch) => {
      const data={user_id,ride_id}
      axios
        .delete(`${process.env.REACT_APP_API_URL}/ridesReports/deleteReport`,{data})
        .then((response) => {
          dispatch({
            type: "deleteReport",
            payload: Id,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };