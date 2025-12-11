import React from 'react'
import styles from "@/app/shop/page.module.css";
export const ShopHeader = () => {
  return (
   <div
        className={
          "w-full h-[3rem] flex justify-center koho-semibold items-center " +
          styles.top_categories
        }
      >
        <ul>
          <li>
            <a>Koszulki i bluzy</a>
          </li>
          <li>
            <a>Czapki</a>
          </li>
          <li>
            <a>Plecaki</a>
          </li>
          <li>
            <a>Shoppery i torby</a>
          </li>
        </ul>
        <div className={styles.vt}></div>
        <ul>
          <li>
            <a>Kubki i filiżanki</a>
          </li>
          <li>
            <a>Talerze</a>
          </li>
          <li>
            <a>Termokubki</a>
          </li>
        </ul>
        <div className={styles.vt}></div>
        <ul>
          <li>
            <a>Magnesy</a>
          </li>
          <li>
            <a>Kalendaże</a>
          </li>
          <li>
            <a>Zeszyty</a>
          </li>
          <li>
            <a>Notatniki</a>
          </li>
          <li>
            <a>Kartki podarunkowe</a>
          </li>
        </ul>
      </div>
  )
}
