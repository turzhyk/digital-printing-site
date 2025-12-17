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
          <section className="grow max-w-[30rem]">
            <h1 className="koho-medium text-[1.2rem]">
              Koszulka z nadrukiem love
            </h1>
            <RatingStars rating={4} />
            <p className={styles.price + " flex"}>
              32,00<span className="font-[300] text-[1.6rem] ">zł</span>
            </p>
            <div className="flex justify-between mt-10">
              <div>
                <div className={styles.type_name}>Material:</div>
              </div>
              <div>
                <div className={styles.type_param}>90% bawewna</div>
                <div className={styles.type_param}>10% poliester</div>
              </div>
            </div>
            <hr />
            <dl className="flex justify-between mt-5 ">
              <div className="flex items-center">
                <div className={styles.question}>
                  <img src="/svg/UI/question.svg" />
                </div>
                <dt className={styles.type_name + " underline"}>
                  Typ nadruku:
                </dt>
              </div>
              <div>
                <dl className={styles.type_param}>sublimacja</dl>
              </div>
            </dl>
            <div className="mt-10 w-auto">
              <p className="text-[1.3rem] mb-2">Rozmiar:</p>
              <ul
                className={styles.size_panel + " border-default font-zalando"}
              >
                {sizeList.map((s, i) => {
                  const isAvailable = sizesAvailable.includes(s);
                  return (
                    <React.Fragment key={i}>
                      <li>
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
                      {i < sizeList.length - 1 && (
                        <li>
                          <div className="w-[1px] h-2/3 bg-black mt-2" />
                        </li>
                      )}
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </section>
          <aside className={styles.buy_panel + " sticky top-30 border-default"}>
            <div className="flex justify-between mb-10">
              <h2>Ilość:</h2>
            </div>
            <div className="flex justify-between ">
              <p>Termin wysyłki:</p>
              <p className="font-[600]">1-2 dni robocze</p>
            </div>
            <div className="flex justify-between ">
              <span className="flex items-center">
                <img className="w-6" src="/svg/UI/delivery_fill.svg" />
                <p>Termin dostawy:</p>
              </span>
              <p className="font-[600]">2-3 dni robocze</p>
            </div>
            <h2 className="font-bold text-right mt-10 mb-[-1rem]">32,00zł</h2>
            <h3 className="text-right m-2">Razem</h3>
            <button className={styles.buy_btn + " border-default"}>
              Dodaj do koszyka
            </button>
          </aside>
        </div>
      </div>
    </React.Fragment>
  );
}
