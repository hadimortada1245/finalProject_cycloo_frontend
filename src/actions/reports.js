import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  export const addReport = (user_id,ride_id,title,reason) => {
    return (dispatch) => {
      const data={user_id,ride_id,title,reason}
      axios
        .post(`${process.env.REACT_APP_API_URL}/ridesReports/add`,data)
        .then((response) => {
          toast.success('Your report sent successfully', {
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
            type: "addReport",
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };