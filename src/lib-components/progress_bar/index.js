import React from "react"
import styles from './index.module.css'

const progress_bar = (props) => {
  return (
    <div className={styles.parent} style={{ height: `${props.height}%` }}>
      <div
        className={styles.child}
        style={{ width: `${props.progress}%`, backgroundColor: `${props.bgcolor}` }}
      >
        <span className={styles.progress_text}>{`${props.progress}%`}</span>
      </div>
    </div>
  );
};

export default progress_bar;
