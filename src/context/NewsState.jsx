import { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import axios from "axios"

const initialState = {
  news: [],
//   x:""
}


export const NewsContext = createContext(initialState);

export const NewsProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // const [news, setnews] = useState([]);

    const getNews = async () => {
        const res = await axios.get("https://api.nytimes.com/svc/archive/v1/2014/8.json?api-key=gjKXoqG3jMZgCKghYvWOACtABOJW2G9W");
        console.log(res.data.response.docs);
        //https://api.nytimes.com/svc/archive/v1/2014/9.json?api-key=gjKXoqG3jMZgCKghYvWOACtABOJW2G9W
        dispatch({
          type: "GET_NEWS",
          payload: res.data.response.docs,
        });//action
      };

      const x=()=>{
        // peticion api
        // dipatch "x"
      }

      return (
        <NewsContext.Provider
          value={{
            news: state.news,
            getNews,
            x
          }}
        >
          {children}
        </NewsContext.Provider>
      );
}