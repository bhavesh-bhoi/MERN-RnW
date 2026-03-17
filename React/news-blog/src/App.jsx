// Imports
import { useEffect, useState } from "react";
import { fetchNews } from "../api/api";

// Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

// Main App
function App() {
  // State
  const [articles, setArticles] = useState([]);

  // Fetch News
  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews();
      setArticles(data);
    };

    getNews();
  }, []);

  // Render
  return (
    <>
      <Navbar />
      <Hero />

      {/* News Grid */}
      <div className="container">
        <div className="grid">
          {articles.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
