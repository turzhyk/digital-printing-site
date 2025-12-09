"use client";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
export const Sidebar = () => {
  const [isShown, setIsShown] = useState<boolean>(true);

  const onVisibilityBtnClick = () => {
    setIsShown(!isShown);
  };

  return (
    <React.Fragment>
      <div className={styles.sidebar_fade}></div>
      <div className={isShown ? "w-20" : ""}></div>
      <button
        className={
          "w-auto h-10 m-2 mt-20 border-default p-2 fixed " +
          (isShown ? "invisible" : "")
        }
        onClick={onVisibilityBtnClick}
      >
        Pokaż menu
      </button>
      <div
        className={
          styles.sidebar + " koho-semibold mt-20 " + (isShown ? "" : styles.hidden)
        }
      >
        <button className={styles.hide_btn + (isShown ? "" : styles.hidden)} onClick={onVisibilityBtnClick}>
          <img src="svg/UI/hide_sidebar1.svg"></img>
        </button>
        <h3 className="koho-extrabold">Digital Printing</h3>
         <div className="mb-10">
          <div id="sidemenu-category">
            <hr />
            <h2 className="koho-extralight">Sklep</h2> <hr />
          </div>

            <h1 className="koho-bold">Druk</h1>
            <ul>
              <li>
                Ksero <span className={styles.details}> (A0-A6)</span>
              </li>
              <li>
                Skan <span className={styles.details}> (A0-A6)</span>
              </li>
              <li>
                Druk <span className={styles.details}> (A0-A6)</span>
              </li>
            </ul>

        </div>
        <div>
          <div id="sidemenu-category">
            <hr />
            <h2 className="koho-extralight">Usługi</h2> <hr />
          </div>

            <h1 className="koho-bold">Druk</h1>
            <ul>
              <li>
                Ksero <span className={styles.details}> (A0-A6)</span>
              </li>
              <li>
                Skan <span className={styles.details}> (A0-A6)</span>
              </li>
              <li>
                Druk <span className={styles.details}> (A0-A6)</span>
              </li>
            </ul>
        
          <h1 className="koho-bold">Foto produkcja</h1>
          <ul>
            <li>
              Druk zdjęć <span className={styles.details}> (A4-A6)</span>
            </li>
            <li>Pieczątki</li>
            <li>Wizytówki</li>
            <li>Broszury</li>
            <li>Katalogi</li>
            <li>Identyfikatory</li>
            <li>Teczki</li>
            <li>Tabliczki grawerowane</li>
            <li>Standy</li>
            <li>Przypinki</li>
            <li>Długopisy grawerowane</li>
            <li>Ulotki</li>
          </ul>
           <h1 className="koho-bold">Produkcja firmowa</h1>
          <ul>
            <li>Pieczątki</li>
            <li>Wizytówki</li>
            <li>Broszury</li>
            <li>Katalogi</li>
            <li>Identyfikatory</li>
            <li>Teczki</li>
            <li>Tabliczki grawerowane</li>
            <li>Standy</li>
            <li>Przypinki</li>
            <li>Długopisy grawerowane</li>
            <li>Ulotki</li>
          </ul>
        </div>
        <div>
         
        </div>
      </div>
    </React.Fragment>
  );
};
