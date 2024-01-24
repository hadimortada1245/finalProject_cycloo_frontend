import axios from "axios";
export const getCountOrders = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/orders/countOrders`)
        .then((response) => {
          const totalOrders=response.data.result[0].count;
          dispatch({
            type: "getCountOrders",
            payload: totalOrders,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };

export const getCountOrdersByUserId = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/orders/getCountOrdersByUserId/${Id}`)
        .then((response) => {
          const totalOrders=response.data.result[0].count;
          dispatch({
            type: "getCountOrdersByUserId",
            payload: totalOrders,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };