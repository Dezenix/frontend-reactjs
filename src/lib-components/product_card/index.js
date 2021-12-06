import React from "react";
import styles from "./index.module.css";

const product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Image here */}
        <img
          src="https://i.ibb.co/SrRbQWb/img-1.png"
          alt="Shoe-img"
          className={styles.card__img}
        />

        {/* Card details here */}
        <div className={styles.card__data}>
          <h1 className={styles.card__title}>Nike Air Jordan</h1>
          <span className={styles.card__preci}>$99</span>
          <p className={styles.card__description}>
            Nike Air Jordan Footwear basketball sneakers.
          </p>
          <a href="/" className={styles.card__button}>
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default product;
