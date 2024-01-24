import axios from "axios";
export const getCountLikes = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/likedRides/countLikes/${Id}`)
        .then((response) => {
          const totalLikes=response.data.result[0].likes;
          dispatch({
            type: "getCountLikes",
            payload: totalLikes,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };