import "./CardWithPic.css";

function CardWithPic({card}) {
  return (
    <article className="cardWithPicArticle">
      <img className="cardWithPicArticle__img" src={card.images[0].src} alt=""/>
      <h1 style={{color: card.colorcode}} className="cardWithPicArticle__title">{card.title}</h1>
      <p className="cardWithPicArticle__text">{card.text}</p>
    </article>
  );
}

export default CardWithPic;