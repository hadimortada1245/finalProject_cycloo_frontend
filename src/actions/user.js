import axios from "axios";

export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/getAllUsers`)
      .then((response) => {
        const users = response.data.data;
        dispatch({
          type: "getAllUsers",
          payload: users,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};
