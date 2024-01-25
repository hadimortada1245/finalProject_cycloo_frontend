import axios from "axios";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const addOrder = (user_id,total,delivery,quantity,products) => {
    return async (dispatch) => {
        const data = {
            user_id,
            status:0,
            total,
            delivery,
            quantity
        }
        console.log(data)
        axios
        .post(`${process.env.REACT_APP_API_URL}/orders/add`, data)
        .then((response) => {
            const productsData={
                order_id:response.data.result.insertId,
                products
            }
            axios.post(`${process.env.REACT_APP_API_URL}/orderProducts/add`,productsData)
            .then((response)=>{
                axios.delete(`${process.env.REACT_APP_API_URL}/cart/deleteCartByUserId/${user_id}`)
                toast.success('Checkout successfully', {
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
            }).catch((error)=>{
                console.log(error);
            })
          
  
        })
  
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const getOrdersByUserId = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/orders/getOrdersByUserId/${Id}`)
        .then((response) => {
          const orders = response.data.result;
          dispatch({
            type: "getOrdersByUserId",
            payload: orders,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const getOrders = () => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/orders/getOrders`)
        .then((response) => {
          const orders = response.data.result;
          dispatch({
            type: "getOrders",
            payload: orders,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const updateOrders = (Id) => {
    return (dispatch) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/orders/updateStatus/${Id}`)
        .then((response) => {
            toast.success('Updated successfully!', {
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
            type: "updateOrders",
            payload: Id,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };