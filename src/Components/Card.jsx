import React from 'react';

const Card = ({ name, price, imageUrl }) => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img src={imageUrl} alt="1" width={133} height={112} />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} сом.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus.svg" />
        </button>
      </div>
    </div>
  );
};

export default Card;
