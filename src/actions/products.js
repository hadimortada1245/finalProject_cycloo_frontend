import axios from "axios";
export const getAllProducts = () => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/products/getAllProducts`)
        .then((response) => {
          const products = response.data.result;
          dispatch({
            type: "getAllProducts",
            payload: products,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const deleteProduct = (Id) => {
      return (dispatch) => {
        axios
          .delete(`${process.env.REACT_APP_API_URL}/products/deleteProduct/${Id}`)
          .then((response) => {
            dispatch({
              type: "deleteProduct",
              payload: Id,
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };
    };