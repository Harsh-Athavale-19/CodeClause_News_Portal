import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";

const App = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(5);
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

  const newsAPI = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}&pageSize=${loadMore}`
      );
      setNewsArray(news?.data?.articles);
      setNewsResults(news?.data?.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsResults, category, loadMore]);

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
};

export default App;
