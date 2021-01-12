import "./SmallArticle.css";

function SmallArticle({article}) {
  return(
    <article className="smallArticle">
      <img className="smallArticle__image" src={article.image} alt="relating to travel"/>
      <h2 className="smallArticle__title">{article.title}</h2>
      <h1 className="smallArticle__heading">{article.heading}</h1>
      <p className="smallArticle__text">{article.text}</p>
    </article>
  )
}

export default SmallArticle;