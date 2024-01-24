
const totalLikessReducer = (state = [], action) => {
    switch (action.type) {
      case "getCountLikes":
        return action.payload;
      default:
        return state;
    }
  };
  export default totalLikessReducer;