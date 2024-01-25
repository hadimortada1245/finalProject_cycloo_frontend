import axios from "axios";
export const addToCart = (userId,maxQuantity,delivery,productId,price,img,name) => {
  const data={
    userId,quantity:1,maxQuantity,delivery,productId,price,img,name
  }
    return (dispatch) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/cart/add`,data)
        .then((response) => {
          dispatch({
            type: "addToCart",
             payload: data,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const getCartData = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/cart/getCartDataByUserId/${Id}`)
        .then((response) => {
          const cartItems=response.data.cartItems;
          dispatch({
            type: "getCartData",
            payload: cartItems,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const removeFromCart = (userId,productId) => {
    return (dispatch) => {
      const data={userId,productId}
      axios
        .delete(`${process.env.REACT_APP_API_URL}/cart/remove`,{data})
        .then((response) => {
          dispatch({
            type: "removeFromCart",
            payload: {userId,productId},
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const decrease = (userId,productId) => {
    return (dispatch) => {
      const data={userId,productId}
      axios
        .put(`${process.env.REACT_APP_API_URL}/cart/decrease`,data)
        .then((response) => {
          dispatch({
            type: "decrease",
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const increase = (userId,productId) => {
    return (dispatch) => {
      const data={userId,productId}
      axios
        .put(`${process.env.REACT_APP_API_URL}/cart/increase`,data)
        .then((response) => {
          dispatch({
            type: "increase",
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
