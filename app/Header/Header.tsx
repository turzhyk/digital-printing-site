"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [isFull, setIsFull] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => {
      setIsFull(window.scrollY < 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`${styles.header}  ${!isFull ? styles.shrink : ""}`}>
      <div className="flex ml-20">
        <img className={styles.logo} src="icons/ig_logo.jpg" />
        <div className="mt-2">
          <h1 className="koho-regular">Digital Printing</h1>
          <h2 className={"koho-semibold " + (isFull ? "" : "invisible")}>
            Szybki i wygodny druk
          </h2>
        </div>
      </div>
      <div className="flex justify-between gap-7">
        <div className={"border-default koho-semibold " + styles.phone}>
          +48 123 456 789
        </div>
        <ul className="koho-medium m-auto mr-20">
          <li>O nas</li>

          <li>
            Usługi projektowania
            <button className="ml-3">
              <img src="svg/arrow_down.svg" />
            </button>
          </li>
          <li>
            Usługi biurowe
            <div className={styles.menu + " " + styles.tab + " border-default"}>
              <div>
              <strong>Druk</strong>
              <ul>
                <li>Ksero</li>
                <li>Druk A3-A6</li>
                <li>Druk A0-A2</li>
                <li>Skan</li>
              </ul>
              </div>
               <div>
              <strong>Fotodruk</strong>
              <ul>
                <li>Zdjęcia na dokumenty</li>
                <li>Zdjęcia A6</li>
                <li>Zdjęcia A4</li>
                <li>Fotomagnes</li>
              </ul>
              </div>
            </div>
            <button className="ml-3">
              <img src="svg/arrow_down.svg" />
            </button>
          </li>
          <li>
            <a href="/services"> Usługi druku</a>
            <div className={styles.menu + " " + styles.tab + " border-default"}>
              <div>
              <strong>Druk</strong>
              <ul>
                <li>Ksero</li>
                <li>Druk A3-A6</li>
                <li>Druk A0-A2</li>
                <li>Skan</li>
              </ul>
              </div>
               <div>
              <strong>Fotodruk</strong>
              <ul>
                <li>Zdjęcia na dokumenty</li>
                <li>Zdjęcia A6</li>
                <li>Zdjęcia A4</li>
                <li>Fotomagnes</li>
              </ul>
              </div>
            </div>
            <button className="ml-3">
              <img src="svg/arrow_down.svg" />
            </button>
          </li>
          <li>
            Sklep
            <button className="ml-3">
              <img src="svg/arrow_down.svg" />
            </button>
          </li>
        </ul>
        <button className={styles.card}>
          <img className="" src="svg/UI/shopping_bag.svg" />
        </button>
      </div>
    </header>
  );
};
