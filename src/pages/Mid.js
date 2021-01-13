import { useEffect, useState } from "react";
import "./Mid.css";
import BigArticleMid from "../components/BigArticleMid";
import LatestNews from "../components/LatestNews";
import CardWithPic from "../components/CardWithPic";

function Mid() {
  var [articles, setArticles] = useState([]);
  var [cards, setCards] = useState([]);

  
  useEffect(function() {
    fetch("./database.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setArticles(data.bigArticlesMid);
      setCards(data.cardsWPic);
    })
  }, []);

  return (
    <section className="middleSection">
      <section className="bigArticles">
        {/*  artikel kald */}
        {articles.map(function (article) {
          return <BigArticleMid key={ article.heading } article={ article } />;
        })}
        { /*cards kald.*/}
        <div className="cardWithPic">
          {cards.map(function (card) {
            return <CardWithPic key={ card.title } card={ card } />;
          })}
        </div>
      </section>
      <LatestNews />
    </section>
  )
}

export default Mid;