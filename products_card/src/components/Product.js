import React from "react";
import "./styles/Style.css";

const product = () => {
  return (
    <div className="container">
      <div className="card">
        {/* Image here */}
        <img
          src="https://i.ibb.co/SrRbQWb/img-1.png"
          alt="Shoe-img"
          className="card__img"
        />

        {/* Card details here */}
        <div className="card__data">
          <h1 className="card__title">Nike Air Jordan</h1>
          <span className="card__preci">$99</span>
          <p className="card__description">
            Nike Air Jordan Footwear basketball sneakers.
          </p>
          <a href="/" className="card__button">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default product;
