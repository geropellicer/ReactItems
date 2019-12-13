import React, { useEffect, useState } from "react";
import { setState } from "expect/build/jestMatchersObject";
import styles from '../style/FullGame.module.css';

const FullGame = props => {
  const { slug, id } = props.match.params;

  const [gameItem, setGameItem] = useState();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const rawData = await fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games/${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "c26edb61e6mshfb6142e8021ef4ep134f88jsn26007ace5643"
        }
      }
    );

    const jsonData = await rawData.json();
    console.log(jsonData);
    setGameItem(jsonData);
  };

  if (!gameItem) {
    return <h5>Loading...</h5>;
  } else {
    return (
      <div className="content game">
        <header>
          <h1>{gameItem.name}</h1>
        </header>
        <div className="body game">
          <div className="gameHeader">
            <img src={gameItem.background_image} />
            <img src={gameItem.background_image_additional} />
          </div>
          <p>{gameItem.description_raw}</p>
          <h2>Statistics:</h2>
          <ul className={styles.gameDetails}>
              <li>Beaten: {gameItem.added_by_status.beaten}</li> 
              <li>Dropped: {gameItem.added_by_status.dropped}</li>
              <li>Owned: {gameItem.added_by_status.owned}</li>
              <li>Plaing: {gameItem.added_by_status.playing}</li>
              <li>Toplay: {gameItem.added_by_status.toplay}</li>
              <li>Yet: {gameItem.added_by_status.yet}</li>
          </ul>
          <h2>Developer:</h2>
          <h4>{gameItem.developers[0].name}</h4>
        </div>
      </div>
    );
  }
};

export default FullGame;
