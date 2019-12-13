import React from "react";
import {Link} from 'react-router-dom';

const GameSmallCard = ({ img, name, id, rating, dominant, slug }) => {

  const domColor = dominant;
  const style = {
      background: domColor
  }

  const toRoute = `/shop/${slug}-${id}`;

  return (
    <Link to={toRoute}>
    <div style={style} className="juego-small">
      <h3>{id}</h3>
      <img src={img} alt={name} />
      <h4>{rating}</h4>
      <h1>{name}</h1>
    </div>
    </Link>
  );

};

export default GameSmallCard;
