import axios from "axios";
export const getJoinRequestsData = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesJoining/getJoiningRequestsData`)
        .then((response) => {
          const requestsData=response.data.result;
          dispatch({
            type: "getJoinRequestsData",
            payload: requestsData,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const deleteJoinRequest = (user_id,ride_id,Id) => {
    return (dispatch) => {
      const data={user_id,ride_id}
      axios
        .delete(`${process.env.REACT_APP_API_URL}/ridesJoining/deleteJoinRequest`,{data})
        .then((response) => {
          dispatch({
            type: "deleteJoinRequest",
            payload: Id,
          });
          dispatch({
            type: "reduceTotal"
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const acceptJoinRequest = (user_id,ride_id,Id) => {
    return (dispatch) => {
      const data={user_id,ride_id}
      axios
        .put(`${process.env.REACT_APP_API_URL}/ridesJoining/update`,data)
        .then((response) => {
          dispatch({
            type: "acceptJoinRequest",
            payload: Id,
          });
          dispatch({
            type: "reduceTotal"
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };