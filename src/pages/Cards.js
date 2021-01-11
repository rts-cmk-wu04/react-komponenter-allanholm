import { useEffect, useState } from "react";
import Card from "../components/Card";

function Cards() {
  var [cards, setCards] = useState([]);

  useEffect(function() {
    fetch("../cards.json")
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
    {cards.map(function (card) {
      return <Card key={ card.heading } card={ card } />;
    })}  
  </>
  )
}

export default Cards;