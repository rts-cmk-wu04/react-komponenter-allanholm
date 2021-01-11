import "./Card.css";

function Card({card}) {
  return (
    <>
      <div className={ card.className}>
        <img className="card__img" src={ card.icon } alt="icon"/>
        <h1 className="card__heading"> { card.heading } </h1>
        <p className="card__text">{ card.text }</p>
      </div>
    </>
  );
}

export default Card;