"use client";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import { ShopHeader } from "@/app/components/ShopHeader/ShopHeader";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import { RatingStars } from "@/app/components/RatingStars";

const sizeList = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
export default function page() {
  const params = useParams(); // { productId: "123" }
  const { productId } = params;
  const [size, setSize] = useState<number>(0);
  const sizesAvailable = ["S", "L", "XL"];

  const handleSize = (val: number) => {
    setSize(val);
  };
  return (
    <React.Fragment>
      <div className="pt-20" />
      <ShopHeader />
      <Breadcrumbs />
      <div className={"w-[80rem] m-auto " + styles.product}>
        <div className="flex justify-center gap-10 h-200">
          <div className="w-[25rem] max-h-max border-default">
            <img className="m-auto" src="/products/aob-tshirt.jpg" />
          </div>
          <div className="grow max-w-[30rem]">
            <p className="koho-medium text-[1.4rem]">
              Koszulka z nadrukiem love
            </p>
            <RatingStars rating={4}/>
            <p className={styles.price + " flex"}>
              32,00<span className="font-[300] text-[1.6rem] ">zł</span>
            </p>
            <div className="flex justify-between mt-10">
              <div>
                <p className={styles.type_name}>Material:</p>
              </div>
              <div>
                <p className={styles.type_param}>90% bawewna</p>
                <p className={styles.type_param}>10% poliester</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between mt-5 ">
              <div className="flex items-center">
                <div className={styles.question}>
                  <img src="/svg/UI/question.svg" />
                </div>
                <p className={styles.type_name + " underline"}>Typ nadruku:</p>
              </div>
              <div>
                <p className={styles.type_param}>sublimacja</p>
              </div>
            </div>
            <div className="mt-10 w-auto">
              <p className="text-[1.3rem] mb-2">Rozmiar:</p>
              <ul
                className={styles.size_panel + " border-default font-zalando"}
              >
                {sizeList.map((s, i) => {
                  const isAvailable = sizesAvailable.includes(s);
                  return (
                    <li key={i}>
                      <button
                        className={
                          (size == i ? styles.active : " ") +
                          " " +
                          (isAvailable ? "" : "opacity-30")
                        }
                        onClick={() => {
                          if (isAvailable) handleSize(i);
                        }}
                      >
                        {s}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.buy_panel+" sticky top-30 border-default"}>
            <div className="flex justify-between mb-10">
             <h2>Ilość:</h2>
            </div>
             <div className="flex justify-between ">
                  <p>Termin wysyłki:</p>
                  <p className="font-[600]">1-2 dni robocze</p>
             </div>
             <div className="flex justify-between ">
                  <p>Termin dostawy:</p>
                  <p className="font-[600]">2-3 dni robocze</p>
             </div>
             <h2 className="font-bold text-right mt-10 mb-[-1rem]">32,00zł</h2>
             <h3 className="text-right m-2">Razem</h3>
             <button className={styles.buy_btn + " border-default"}>Dodaj do koszyka</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
