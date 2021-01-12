import "./BigArticleMid.css";

function BigArticleMid({article}) {
  return (
    <article className="bigArticleMid">
      <img className="bigArticleMid__bigImage" src={article.images[0].src} alt=""/>
      <img className="bigArticleMid__icon" src={article.images[1].src} alt=""/>
      <p className="bigArticleMid__iconText">The new york times</p>
      <h1 className="bigArticleMid__heading">{article.heading}</h1>
      <p className="bigArticleMid__text">{article.text}</p>
    </article>
  )
}

export default BigArticleMid;