"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import MobileSidebar from "../components/MobileSidebar/MobileSidebar";
import Link from "next/link";

export const Header = () => {
  const [isFull, setIsFull] = useState<boolean>(true);

  const handleBurgerClick = () => {};
  useEffect(() => {
    const onScroll = () => {
      setIsFull(window.scrollY < 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`${styles.header}  ${!isFull ? styles.shrink : ""}`}>
      <div className={styles.sidebar_holder}>
       
          <MobileSidebar />

      </div>

      <Link href="/" className={"flex " + styles.logo_wrapper}>
        <img
          className={styles.logo}
          src="/svg/logo3.svg"
          alt="Digital Printing"
        />
        <div className={"mt-2 "}>
          <div className="flex">
            <div className={styles.title_wrapper}>
              <h1 className={styles.title}>Digital Printing</h1>
            </div>
            <p className={styles.pointer}> &nbsp;|</p>
          </div>
          <div className={styles.slogan + " " + (isFull ? "" : styles.hidden)}>
            <h2 className={"font-[600] "}>Szybki i wygodny druk</h2>
          </div>
        </div>
      </Link>
      <div className="flex justify-between gap-7">
        <div className={"border-default koho-semibold flex gap-2 " + styles.phone}>
          <img className="w-5" src="/svg/UI/phone.svg" />
            <span>123 456 789</span>
        </div>
        <nav className="m-auto">
          <ul className={" koho-medium m-auto mr-20 "+styles.tabs}>
            <li className={styles.regular_border}>
              <Link href="/">O nas</Link>
            </li>

            <li className={styles.dropdown_border}>
              <Link href="/">Usługi projektowania</Link>
              <button className="ml-3">
                <img src="/svg/arrow_down.svg" />
              </button>
            </li>
            <li className={styles.dropdown_border}>
              <Link href="/">Usługi biurowe</Link>
              <div
                className={styles.menu + " " + styles.tab + " border-default"}
              >
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
                <img src="/svg/arrow_down.svg" />
              </button>
            </li>
            <li className={styles.dropdown_border}>
              <Link href="/services"> Usługi druku</Link>
              <div
                className={styles.menu + " " + styles.tab + " border-default"}
              >
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
                <Link href="/">Pokaż wszystko</Link>
              </div>
              <button className="ml-3">
                <img src="/svg/arrow_down.svg" />
              </button>
            </li>
            <li className={styles.dropdown_border}>
              <Link href="/shop">Sklep</Link>
              <button className="ml-3">
                <img src="/svg/arrow_down.svg" />
              </button>
            </li>
          </ul>
        </nav>
        <button className={styles.card}>
          <img className="" src="/svg/UI/shopping_bag.svg" />
        </button>
        <button className={"font-[500] cursor-pointer hover:font-[600] " +styles.login_btn}>Zaloguj</button>
      </div>
    </header>
  );
};
