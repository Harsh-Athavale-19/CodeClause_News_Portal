import No_Image from "../../assets/no-image.png";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  //2021-01-09T12:15:30Z
  const fulldate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
  var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
  const hour = parseInt(date[4].substring(0, 2)); //
  const time = hour > 12 ? true : false;

  return (
    <>
      <div className="newsCard">
        <img
          className="newsImage"
          src={newsItem.urlToImage ? newsItem.urlToImage : No_Image}
          alt={newsItem.title}
        />
        <div className="newsText">
          <div>
            <span className="title">{newsItem.title}</span>
            <br />
            <span className="author">
              <a href={newsItem.url} target="_blank" rel="noreferrer">
                <b> short </b>
              </a>
              <span className="muted">
                by {newsItem.author ? newsItem.author : "unknown"} /{" "}
                {time
                  ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                  : `${hour}:${date[4].substring(3, 5)} am`}{" "}
                on {date[2]} {date[1]} {date[3]}, {date[0]}
              </span>
            </span>
          </div>
          <div className="lowerNewsText">
            <div className="description">{newsItem.description}</div>
            <span className="readMore">
              read more at
              <a href={newsItem.url} target="_blank" rel="noreferrer">
                <b> {newsItem.source.name}</b>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
