import { useEffect, useState } from "react";
import Collection from "../components/Collection";
import "./Collections.css";

function Collections() {
  var [collections, setCollections] = useState([]);

  useEffect(function() {
    fetch("./database.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      setCollections(data.collections);
    })
  }, []);

  return (
      <section className="collections">
        {collections.map(function (collection) {
          return <Collection key={ collection.heading1 } collection={ collection } />;
        })}
      </section>
  )
}

export default Collections;