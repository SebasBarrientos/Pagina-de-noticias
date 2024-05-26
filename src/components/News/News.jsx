import React, { useContext, useEffect } from "react";
import { NewsContext } from "../../context/NewsState";

const News = () => {
  const { news, getNews,x } = useContext(NewsContext);
  useEffect(() => {
    getNews();
  }, []);

  if(news.length <= 0){
    return <p>Cargando...</p>
  }

  const loadImage=(article)=>{
    console.log(article);
    if (article==undefined ) {
        return <p>No available image</p>
    } else {
        return  <img src={article} alt="" />
    }
  }
  return <div>
    {console.log(news)}
    
    {news.map(news=>{
    return (
        <div >
            <h3>{news.headline.main}</h3>
{            console.log(news.multimedia[0])}
            { news.multimedia[0] === undefined ? <p>No available image </p>  :  <img src={`www.nytimes.com/${news.multimedia[0].url}`} alt=""/>}
            
            <a href={news.web_url}>Read the hole article</a>
             {console.log(news)}
            {/* <img src={news.image} alt="" />
            <p>{news.name}</p> */}
        </div>
    )
  })}
  </div>;
};

export default News;