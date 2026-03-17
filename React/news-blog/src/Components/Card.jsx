const Card = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    // News Card
    <div className="card">
      {/* News Image */}
      <img src={urlToImage || "https://via.placeholder.com/300"} alt="news" />

      {/* Card Content */}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {/* Read More Button */}
        <a href={url} target="_blank" rel="noreferrer">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default Card;
