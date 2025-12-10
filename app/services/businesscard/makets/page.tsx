"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Businesscard1 from "@/app/makets/businesscards/components/Businesscard1";
import { koho } from "@/app/layout";
export default function page() {
  const [tab1Shown, setTab1Shown] = useState<boolean>(true);
  const [tab2Shown, setTab2Shown] = useState<boolean>(true);
  return (
    //     <div className="flex flex-col gap-2 items-center pt-30">

    <div className="m-auto w-[68rem] pt-30">
      <h1 className={`text-center`}>
        Wybież <strong>wzór</strong> wizytówki
      </h1>
      <p className="mb-5 font-[500] text-center">
        Zaprojektuj i zamów druk wizytówek dalej
      </p>

      <button
        className="text-left ml-0 w-[100%] flex justify-left mb-3 cursor-pointer"
        onClick={() => setTab1Shown(!tab1Shown)}
      >
        <p className="text-[1.5rem] ">90x50mm</p>
        <img
          className={"ml-4 " + (tab1Shown ? styles.hidden : "")}
          src="/svg/arrow_down.svg"
        />
      </button>
      <div
        className={
          styles.cards_wrapper +
          " w-[68rem] " +
          (tab1Shown ? " " : styles.hidden)
        }
      >
        <div className={styles.cards}>
          <div className={styles.card + " border-default"}>
            <div>
              <img src="/icons/thumbnails/businesscards/1.webp" />
            </div>
           <img className={styles.arrow} src="/svg/arrow_down.svg"/>
          </div>
           <div className={styles.card + " border-default"}>
            <div>
              <img src="/icons/thumbnails/businesscards/2.webp" />
            </div>
           <img className={styles.arrow} src="/svg/arrow_down.svg"/>
          </div>
           <div className={styles.card + " border-default"}>
            <div>
              <img src="/icons/thumbnails/businesscards/3.webp" />
            </div>
           <img className={styles.arrow} src="/svg/arrow_down.svg"/>
          </div>
           <div className={styles.card + " border-default"}>
            <div>
              <img src="/icons/thumbnails/businesscards/4.webp" />
            </div>
           <img className={styles.arrow} src="/svg/arrow_down.svg"/>
          </div>
           <div className={styles.card + " border-default"}>
            <div>
              <img src="/icons/thumbnails/businesscards/5.jpg" />
            </div>
           <img className={styles.arrow} src="/svg/arrow_down.svg"/>
          </div>
        </div>
      </div>
      <button
        className="text-left ml-0 mt-10 w-[100%] flex justify-left mb-3 cursor-pointer"
        onClick={() => setTab2Shown(!tab2Shown)}
      >
        <p className="text-[1.5rem] ">85x55mm</p>
        <img
          className={"ml-4 " + (tab2Shown ? styles.hidden : "")}
          src="/svg/arrow_down.svg"
        />
      </button>
      <div
        className={
          styles.cards_wrapper +
          " w-[68rem] " +
          (tab2Shown ? " " : styles.hidden)
        }
      >
        <div className={styles.cards}>
          <div className={styles.card + " border-default"}>
            <Businesscard1 name="Tomasz Wieecvnccki" phone="23 2312" />
            <div>n</div>
          </div>
        </div>
      </div>
    </div>
  );
}
