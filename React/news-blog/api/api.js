import axios from "axios";

export const fetchNews = async () => {
  // API Key
  const API_KEY = "50a860bed6fd4a9faaec9667f65d6cbb";

  // News API
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    );

    return response.data.articles;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
