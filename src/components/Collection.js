import "./Collection.css";

function Collection({collection}) {
  return (
    <div className="collection">
      <h1 className="collection__heading1">{collection.heading1}</h1>
      <img className="collection__authorImage" src={collection.authorImg} alt="author pic"/>
      <img className="collection__bigImage" src={collection.bigImg} alt="pic of stuff"/>
      <h2 className="collection__heading2">{collection.heading2}</h2>
      <address className="collection__author">By: {collection.author}</address>
    </div>
  );
}

export default Collection;