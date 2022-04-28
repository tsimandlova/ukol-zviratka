import React from 'react';
import './style.css';

const Animal = ({foto, nazev, nazevLatinsky}) => {
  return (
    <>
    <div className="animal">
    <div className="animal__image">
      <img src={`${foto}`} alt="slon" />
    </div>
    <div className="animal__desc">
      <div className="animal__name">{nazev}</div>
      <div className="animal__latin">{nazevLatinsky}</div>
    </div>
  </div>
  </>
  );
}

export default Animal;