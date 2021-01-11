// import { useEffect, useState } from "react";
import Card from "../components/Card";

var cards =  [ //dummy json
  {
    "icon": "../icons/On_time_delivery_icon.png",
    "heading": "On-time delivery",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit",
    "className": "card1" 
  },
  {
    "icon": "../icons/Parcels_Icon.png",
    "heading": "Parcels",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit",
    "className": "card2" 
  },
  {
    "icon": "../icons/Quality_Icon.png",
    "heading": "Quality check",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit",
    "className": "card3" 
  },
  {
    "icon": "../icons/Costumer_Service_Icon.png",
    "heading": "Costumer service",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit",
    "className": "card4" 
  }
];


function Cards() {
  // var [cards, setCards] = useState([]);

  // useEffect(function() {
  //   fetch("../../../public/cards.json")
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(data) {
  //     console.log(data);
  //     setCards(data.cards);
  //   })
  // }, []);

  return (
  <>
    {cards.map(function (card) {
      return <Card key={ card.heading } card={ card } />;
    })}  
  </>
  )
}

export default Cards;