"use client";
import React, { useState } from "react";
import styles from "./MobileSidebar.module.css";
import headerStyles from "@/app/Header/Header.module.css";
import { shopCategories } from "@/app/data/categories";
export default function MobileSidebar() {
  const [tabSelected, setTabSelected] = useState<number>(0);
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleBurgerClick = () => {
    setIsShown(true);
    console.log("burger click");
  };
  const onTabClick = (val: number) => {
    setTabSelected(val);
    console.log("ddsad");
  };
  return (
    <React.Fragment>
      <button className={styles.burger} onClick={handleBurgerClick}>
        <img src={"/svg/UI/burger.svg"} />
      </button>
      <div
        className={`${styles.wrapper} ${isShown ? styles.show : styles.hide}`}
        // onClick={() => setIsShown(false)}
      >
        <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center ml-5 w-10">
            <img
              width={50}
              className="mt-2 mr-2 rounded-xl"
              src="/icons/ig_logo.jpg"
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
          <button
            className="absolute right-7 top-7"
            onClick={() => setIsShown(false)}
          >
            <img className="w-7" src="/svg/UI/close.svg" />
          </button>
          <div className="flex justify-between mt-5 w-full gap-4 p-4">
            <a
              href="tel:732853845"
              className="flex justify-center m-auto gap-2  border-default p-3 grow"
            >
              <img className="w-5" src="/svg/UI/phone.svg" />
              <span>123 456 789</span>
            </a>
            <button className="border-default p-3 w-fit grow">Zaloguj</button>
          </div>

          <div className={styles.content + " text-[1.5rem] p-5"}>
            <ul className={styles.tabs}>
              <li>
                <button>Skelp</button>
              </li>
              <li>
                <button onClick={() => onTabClick(1)}>Usługi druku</button>
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
                className="font-[500] text-2xl mb-2 flex gap-2 items-center"
                onClick={() => onTabClick(0)}
              >
                <img
                  width={15}
                  src={"/svg/arrow_down.svg"}
                  style={{ transform: "rotate(90deg)" }}
                />
                Sklep
              </button>
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
