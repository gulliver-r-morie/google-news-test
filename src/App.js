import React, { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("business");
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      const apiKey = "68ad059b799d401b83fef24e593b8986";
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error(error);
      }
    }

    getNews();
  }, [country, category]);

  function handleCountryChange(event) {
    setCountry(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <div>
      <h1>News</h1>
      <div>
        <label htmlFor="country">Country:</label>
        <select id="country" onChange={handleCountryChange}>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="gb">United Kingdom</option>
          <option value="au">Australia</option>
          <option value="jp">Japan</option>
        </select>
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
