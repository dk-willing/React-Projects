import React, { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import "./index.css";
import Sidebar from "./SideBar/Sidebar";

// importing our manual db
import products from "./db/database";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // -------Get input from search box to filter-------
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setSelectedCategory(null);
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // -------------Filter with radio-button---------------
  const handleChange = (e) => {
    setQuery("");
    setSelectedCategory(e.target.value);
  };

  // -------------Filter with buttons---------------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, action, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    // Based on category selection
    if (action) {
      filteredProducts = products.filter(
        ({ category, color, company, title, newPrice }) =>
          category === action ||
          color === action ||
          company === action ||
          title === action ||
          newPrice === action
      );
    }

    return filteredProducts.map(
      ({ title, img, newPrice, star, reviews, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          newPrice={newPrice}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleQuery={handleQuery} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default App;
