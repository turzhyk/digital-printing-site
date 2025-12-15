"use client";
import React, { useState } from "react";
import styles from "./MobileSidebar.module.css";
import headerStyles from "@/app/Header/Header.module.css";
import { shopCategories } from "@/app/data/categories";
export default function MobileSidebar() {
  const [tabSelected, setTabSelected] = useState<number>(0);
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleBurgerClick = () => {
    setIsShown(!isShown);
  };
  const onTabClick = (val: number) => {
    setTabSelected(val);
  };
  return (
    <React.Fragment>
      <button className={styles.burger} onClick={handleBurgerClick}>
        <img src={"/svg/UI/burger.svg"} />
      </button>
      <div
        className={`${styles.wrapper} ${isShown ? styles.show : ""}`}
        onClick={() => setIsShown(false)}
      >
        <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
          <div className="flex ml-5 items-center">
            <img
              width={50}
              className="mt-2 mr-2"
              src="/svg/logo3.svg"
              alt="Digital Printing"
            />
            <div className={"mt-2 "}>
              <div className="flex">
                <div className={headerStyles.title_wrapper}>
                  <h1 className={headerStyles.title}>Digital Printing</h1>
                </div>
                <p className={headerStyles.pointer}> &nbsp;|</p>
              </div>
              <div className={headerStyles.slogan}>
                <p className={"font-[600] text-[0.9rem]"}>
                  Szybki i wygodny druk
                </p>
              </div>
            </div>
          </div>
          <div className={" text-[1.5rem] mt-10 p-5"}>
            <ul className="">
              <li>
                <button onClick={() => onTabClick(1)}>Usługi druku</button>
              </li>
              <li>
                <button>Skelp</button>
              </li>
            </ul>
          </div>
          <div
            className={
              styles.tab + " " + (tabSelected == 1 ? styles.shown : "")
            }
          >
            <div className="flex justify-between items-center">
              <button
                className="font-[500] flex gap-2"
                onClick={() => onTabClick(0)}
              >
                <img width={15} src={"/svg/arrow_down.svg"} />
                Zwróc
              </button>
              <p className="font-[500] text-2xl mb-2">Sklep</p>
            </div>

            <ul>
              <li className="font-[500] underline">Pokaż wszystko</li>
              {shopCategories.map((cat, i) => {
                if (cat === "DIVIDER") return <hr key={i} />;
                else return <li key={i}>{cat}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
