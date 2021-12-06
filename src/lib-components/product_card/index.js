import React from 'react'
import styles from './index.module.css'

const product = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Image here */}
        <img src={props.img} alt='Shoe-img' className={styles.card__img} />

        {/* Card details here */}
        <div className={styles.card__data}>
          <h1 className={styles.card__title}>{props.title}</h1>
          <span className={styles.card__preci}> {props.price} </span>
          <p className={styles.card__description}>{props.des}</p>
          <a href='/' className={styles.card__button}>
            Buy Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default product
