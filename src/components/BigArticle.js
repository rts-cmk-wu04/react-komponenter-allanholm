import "./BigArticle.css";

function BigArticle({article}) {
  return (
    <article className="bigArticle">
      <img className="bigArticle__bigimg" src={article.images[0].src} alt=""/>
      <div>
        <h2 className="bigArticle__title">{article.title}</h2>
        <h1 className="bigArticle__heading">{article.heading}</h1>
        <p className="bigArticle__text">{article.text}</p>
        <img className="bigArticle__smallimg" src={article.images[1].src} alt=""/>
        <img className="bigArticle__smallimg" src={article.images[2].src} alt=""/>
        <img className="bigArticle__smallimg" src={article.images[3].src} alt=""/>
      </div>
    </article>
  )
}

export default BigArticle;