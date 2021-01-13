import { useEffect, useState } from "react";
import SmallArticle from "../components/SmallArticle";
import BigArticle from "../components/BigArticle";
import "./TopArticles.css";

function TopArticles() {
  var [smallArticles, setSmallArticles] = useState([]);
  var [bigArticles, setBigArticles] = useState([]);
  
  useEffect(function() {
    fetch("./database.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setSmallArticles(data.smallArticles);
      setBigArticles(data.bigArticles);
    })
  }, []);

  return (
    <section className="topArticles">
      <section className="smallArticles">
        {smallArticles.map(function (article) {
          return <SmallArticle key={ article.heading } article={ article } />;
        })}
      </section>
      <section className="bigArticles">
        {bigArticles.map(function (article) {
          return <BigArticle key={ article.heading } article={ article } />;
        })}
      </section>
    </section>
  )
}

export default TopArticles;