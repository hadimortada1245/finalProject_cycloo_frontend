import axios from "axios";
export const getCountUser = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/getCountUsers`)
        .then((response) => {
          const totalUsers=response.data.result[0].countUsers;
          dispatch({
            type: "getCountUser",
            payload: totalUsers,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };