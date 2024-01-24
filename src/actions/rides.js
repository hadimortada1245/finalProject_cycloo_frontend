import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addRide = (title,location,distance,cost,date,time,description,difficuly,selectedImg,selectedImgMap) => {
  return  async(dispatch) => {
    let imageUrl1;
    let imageUrl2;
    const formData1 = new FormData();
    formData1.append('image', selectedImg);
    try {
      const response1 = await axios.post('https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c', formData1);
      imageUrl1 = response1.data.data.url;
      const formData2=new FormData();
      formData2.append('image',selectedImgMap);
      const response2 = await axios.post('https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c', formData2);
      imageUrl2 = response2.data.data.url;
    } catch (error) {
      console.error('Error uploading image:', error);
    }
    const data = {
      img:imageUrl1 ,
      mapImg:imageUrl2,
      title,location,distance,cost,date,time,description,difficuly
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/rides/add`, data)
      .then((response) => {
        const newProduct = response.data.result;
        dispatch({
          type: "addRide",
          payload: newProduct,
        });
        toast.success('Adding a ride successfully', {
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

export const updateRide = (Id,title,location,distance,cost,date,time,description,difficuly,selectedImg,selectedImgMap,elevation,duration,direction) => {
  return  async(dispatch) => {
    let imageUrl1;
    let imageUrl2;
    const formData1 = new FormData();
    formData1.append('image', selectedImg);
    try {
      const response1 = await axios.post('https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c', formData1);
      imageUrl1 = response1.data.data.url;
      const formData2=new FormData();
      formData2.append('image',selectedImgMap);
      const response2 = await axios.post('https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c', formData2);
      imageUrl2 = response2.data.data.url;
    } catch (error) {
      console.error('Error uploading image:', error);
    }
    const data = {
      img:imageUrl1 ,
      mapImg:imageUrl2,
      title,location,distance,cost,date,time,description,difficuly,elevation,duration,direction
    }
    axios
      .put(`${process.env.REACT_APP_API_URL}/rides/update/${Id}`, data)
      .then((response) => {
        const updatedRide = response.data.result;
        dispatch({
          type: "updateRide",
          payload:{ updatedRide,Id},
        });
        toast.success('Updating a ride successfully', {
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
export const updateRideStatus = (Id) => {
  return (dispatch) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/rides/updateStatus/${Id}`)
      .then((response) => {
        const updatedRide = response.data.result;
        dispatch({
          type: "updateRideStatus",
          payload:{ updatedRide,Id},
        });
        toast.success('Updating a ride status successfully', {
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

  export const getAllRides_d = () => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesJoining/getAllRides`)
        .then((response) => {
          const rides = response.data.result;
          dispatch({
            type: "getAllRides_d",
            payload: rides,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const getAllRides_h = () => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesJoining/getAllRidesForRideSection`)
        .then((response) => {
          const rides = response.data.result;
          dispatch({
            type: "getAllRides_d",
            payload: rides,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const getAllRides_u = () => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/likedRides/getAllRides_u`)
        .then((response) => {
          const rides = response.data.result;
          dispatch({
            type: "getAllRides_u",
            payload: rides,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const  getAllRidesForRideSectionWithUser = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesJoining/getAllRidesForRideSectionWithUser/${Id}`)
        .then((response) => {
          const rides = response.data.result;
          dispatch({
            type: "getAllRidesForRideSectionWithUser",
            payload: rides,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const  getAllRidesForTrailsSectionWithUser = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/likedRides/getAllRides/${Id}`)
        .then((response) => {
          const rides = response.data.result;
          dispatch({
            type: "getAllRidesForTrailsSectionWithUser",
            payload: rides,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const deleteRide = (Id) => {
      return (dispatch) => {
        axios
          .delete(`${process.env.REACT_APP_API_URL}/rides/delete/${Id}`)
          .then((response) => {
            dispatch({
              type: "deleteRide",
              payload: Id,
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };
    };
  export const deleteLike = (user_id,ride_id) => {
      return (dispatch) => {
        const data = {
          user_id,ride_id
        }
        axios
          .delete(`${process.env.REACT_APP_API_URL}/likedRides/delete`,{data})
          .then((response) => {
            dispatch({
              type: "deleteLike",
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };
    };
    export const addLike = (user_id,ride_id) => {
      return  (dispatch) => {
        const data = {
          user_id,ride_id
        }
        axios
          .post(`${process.env.REACT_APP_API_URL}/likedRides/add`, data)
          .then((response) => {
            dispatch({
              type: "addLike",
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };
    };