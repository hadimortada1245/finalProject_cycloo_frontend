import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const getRidesRequestsData = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesRequests/getRequestData`)
        .then((response) => {
          const requestsData=response.data.result;
          dispatch({
            type: "getRidesRequestsData",
            payload: requestsData,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const deleteRideRequest = (Id) => {
    return (dispatch) => {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/ridesRequests/delete/${Id}`)
        .then((response) => {
          dispatch({
            type: "deleteRideRequest",
            payload: Id,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const addRideRequest = (user_id,title,location,distance,date,time,difficuly,description) => {
    return (dispatch) => {
      const data={
        user_id,title,location,distance,date,time,difficuly,description
      }
      axios
        .post(`${process.env.REACT_APP_API_URL}/ridesRequests/add`,data)
        .then((response) => {
          console.log(response);
          toast.success('Your request sent successfully!', {
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
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
