import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Cards.css";

function Cards() {
  var [cards, setCards] = useState([]);

  useEffect(function() {
    fetch("../database.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      setCards(data.cards);
    })
  }, []);

  return (
  <>
    <section className="cards">
      {cards.map(function (card) {
        return <Card key={ card.heading } card={ card } />;
      })}  
    </section>
  </>
  )
}

export default Cards;