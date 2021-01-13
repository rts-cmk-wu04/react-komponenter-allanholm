import { useEffect, useState } from "react";
import "./Mid.css";
import BigArticleMid from "../components/BigArticleMid";
import LatestNews from "../components/LatestNews";

function Mid() {
  var [articles, setArticles] = useState([]);
  
  useEffect(function() {
    fetch("./database.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setArticles(data.bigArticlesMid);
    })
  }, []);

  return (
    <section className="middleSection">
      <section className="bigArticles">
        {articles.map(function (article) {
          return <BigArticleMid key={ article.heading } article={ article } />;
        })}
      </section>
      <LatestNews />
    </section>
  )
}

export default Mid;