
const news = (state, action) => {
    switch (action.type) {
      case "GET_NEWS":
        return {
          ...state,
          news: action.payload,//res.data.results
        };
      //   case "X"
      // return{
      //     ...state,
      //     x:"y"
      // }
      default:
        return state;
    }
  };
  
  export default news;