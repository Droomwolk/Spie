import React from 'react';

const ImageBorder = ({ imageUrl, title, subtitle }) => (
    <div className="card">
    <div className="card__image-container">
      <div className="card__image-container__border"></div>
      <img src={imageUrl} alt={title} className="card__image-container__image"/>
      <div className="card__image-container__subtitle">{subtitle}</div>
    </div>
    <div className="card__title">
      <h2 className="card__title-titre">{title}</h2>
    </div>
  </div>
);

export default ImageBorder;



