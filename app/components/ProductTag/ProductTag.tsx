import React from "react";
import styles from './ProductTag.module.css';
export const ProductTag = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tag}>
        od <strong>15zł!</strong>
      </div>
    </div>
  );
};
