import { useEffect, useState } from "react";
import "./LatestNews.css";
import Story from "../components/Story"

function LatestNews() {
  var [news, setNews] = useState([]);

  useEffect(function() {
    fetch("./database.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setNews(data.newsStories);
    })
  }, []);

  return (
    <section className="latestNews">
      <h1 className="latestNews__heading">Latest news</h1>
      {news.map(function (story) {
          return <Story key={ story.category } story={ story } />;
        })}
        <h2 className="latestNews__more">More news</h2>
    </section>
  )
}

export default LatestNews;