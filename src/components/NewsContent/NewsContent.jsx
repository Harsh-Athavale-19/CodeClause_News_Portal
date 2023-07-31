import Container from "@mui/material/Container";
import NewsCard from "../NewsCard/NewsCard";
import PropTypes from "prop-types";
import "./NewsContent.css";

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

NewsContent.propTypes = {
  newsArray: PropTypes.array,
  newsResults: PropTypes.number,
  loadMore: PropTypes.number,
  setLoadMore: PropTypes.func,
};
