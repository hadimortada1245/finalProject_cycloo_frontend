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
          dispatch({
            type:'reduceTotalUsers'
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
  export const login = (email, password) => {
    return (dispatch) => {
      const data = { email, password };
      return axios
        .post(`${process.env.REACT_APP_API_URL}/users/login`, data)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          throw error;
        });
    };
  };
  export const registre = (name,email,phone,address, password) => {
    return (dispatch) => {
      const data = { name,email,phone,address, password };
      return axios
        .post(`${process.env.REACT_APP_API_URL}/users/register`, data)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          throw error;
        });
    };
  };
  
  

