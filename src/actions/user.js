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
export const deleteUser = (Id) => {
    return (dispatch) => {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/users/delete/${Id}`)
        .then((response) => {
          dispatch({
            type: "deleteUser",
            payload: Id,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const getCountUser = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/getCountUsers`)
        .then((response) => {
          console.log(response.data.result[0].countUsers);
          dispatch({
            type: "getCountUser",
            payload: response,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
