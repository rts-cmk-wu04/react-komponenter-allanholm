import { useEffect, useState } from "react";
import SmallArticle from "../components/SmallArticle";

function TopArticles() {
  var [articles, setArticles] = useState([]);

  useEffect(function() {
    fetch("./database.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      setArticles(data.smallArticles);
    })
  }, []);

  return (
      <section className="smallArticles">
        {articles.map(function (article) {
          return <SmallArticle key={ article.heading } article={ article } />;
        })}
      </section>
  )
}

export default TopArticles;