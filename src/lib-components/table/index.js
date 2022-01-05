import React from "react";
import styles from './index.module.css'

const Table = (props) => {
    let headCount = 0;
    let rowCount = 0;
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {props.header.map((head) => (
            <th key={++headCount}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.body.map((row) => (
          <tr key={++rowCount}> 
            {
            props.header.map((head) => (
              <td key={++headCount}>{row[head]}</td>
            ))
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
