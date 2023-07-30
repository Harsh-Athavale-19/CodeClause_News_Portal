import Container from "@mui/material/Container";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <>
      <Container maxWidth="md">
        <div className="content">
          {newsArray.map((newsItem, index) => (
            <NewsCard newsItem={newsItem} key={index} />
          ))}

          {loadMore <= newsResults && (
            <>
              <hr />
              <button className="loadMore" onClick={() => setLoadMore(loadMore + 5)}>
                Load More
              </button>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default NewsContent;
