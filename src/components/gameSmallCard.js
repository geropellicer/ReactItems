import React,{useEffect} from "react";
import {Link} from 'react-router-dom';

const GameSmallCard = ({ img, name, id, rating, slug }) => {

  const toRoute = `/shop/${slug}-${id}`;

  useEffect( () => {
    console.log("SE"); 
  });

  return (
    <Link to={toRoute}>
    <div className="juego-small">
      <h3>{id}</h3>
      <img src={img} alt={name} />
      <h4>{rating}</h4>
      <h1>{name}</h1>
    </div>
    </Link>
  );

};

export default GameSmallCard;
