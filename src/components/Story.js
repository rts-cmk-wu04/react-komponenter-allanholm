import "./Story.css";

function Story({story}) {
  return (
    <article className="latestNewsArticle">
      <img className="latestNewsArticle__image" src={story.images[0].src} alt=""/>
      <div>
        <h1 className="latestNewsArticle__heading" style={{color: story.colorcode}}>{story.category}</h1>
        <p className="latestNewsArticle__text">{story.text}</p>
      </div>
    </article>
  )
}

export default Story;