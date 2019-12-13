import React, { useEffect, useState } from "react";
import GameSmallCard from "../components/gameSmallCard";

const Shop = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://rawg-video-games-database.p.rapidapi.com/games",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "c26edb61e6mshfb6142e8021ef4ep134f88jsn26007ace5643"
        }
      }
    );

    const parsedData = await data.json();
    setItems(parsedData.results);
    console.log(parsedData.results);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const displayList = () => (
    items.map(item => (
      <GameSmallCard
      key={item.id}
      id={item.id}
      name={item.name}
      rating={item.rating}
      img={item.background_image}
      dominant={item.dominant_color}
      slug={item.slug}
      />
    ))
  );

  return (
    <div>
        <h1>Shop</h1>
        {
          displayList()
        }
    </div>
  );
};

export default Shop;
