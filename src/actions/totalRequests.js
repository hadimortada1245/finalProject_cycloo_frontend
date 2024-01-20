import axios from "axios";
export const getCountRequests = (Id) => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/ridesRequests/count`)
        .then((response) => {
          const totalRidesRequests=response.data.result[0].count;
          axios.get(`${process.env.REACT_APP_API_URL}/ridesJoining/getCountJoiningRequest`)
          .then((response)=>{
            const totalRequests=totalRidesRequests+response.data.result[0].count;
            dispatch({
                type: "getCountRequests",
                payload: totalRequests,
              });
          })
          
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
