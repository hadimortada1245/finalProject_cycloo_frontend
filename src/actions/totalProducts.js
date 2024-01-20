import axios from "axios";
export const getCountProducts = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/products/countProducts`)
        .then((response) => {
          const totalProducts=response.data.result[0].count;
            dispatch({
                type: "getCountProducts",
                payload: totalProducts,
              });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
