import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          console.log(response)
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
export const addJoin = (user_id,ride_id,approved) => {
    return (dispatch) => {
      const data={user_id,ride_id,approved}
      console.log(data);
      axios
        .post(`${process.env.REACT_APP_API_URL}/ridesJoining/add`,data)
        .then((response) => {
          if(approved===0)
          toast.success('Request sent successfully!', {
            position: "top-center",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          else 
          toast.success('You joined the ride successfully!', {
            position: "top-center",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          dispatch({
        type: "addJoin",
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
        });
    };
  };