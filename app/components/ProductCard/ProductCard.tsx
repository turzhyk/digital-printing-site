import React from "react";
import styles from "./ProductCard.module.css";

export const ProductCard = (props: { price: number; sale?: number }) => {
  const getPrice = () => {
    if (props.sale) return (props.price * props.sale) / 100;
    else return props.price;
  };
  return (
    <div className={styles.card + " flex flex-col justify-between"}>
      <div>
        {props.sale && <div className={styles.sale_tag}>-{props.sale}%</div>}
        <div className="p-6 w-auto h-[14rem] overflow-clip">
          <img
            className="aspect-1/1 object-cover"
            src="/products/aob-tshirt.jpg"
          />
          <div className="flex justify-center gap-3 mt-2">
            <div className={styles.page_dot}></div>
            <div className={styles.page_dot}></div>
            <div className={styles.page_dot + " " + styles.active}></div>
          </div>
        </div>
        <h3 className="uppercase">Koszulka z nadrukiem "love"</h3>
        <p className="font-bold mb-4">Czarny</p>
      </div>
      <div>
        {props.sale && (
          <p className={"text-right text-md font-[400] w-full"}>
            cena regularna:{" "}
            <span className={styles.old_price}>{props.price}zł</span>
          </p>
        )}
        <div className="flex justify-between items-end mt-1">
          <div className="koho-semibold flex gap-1 opacity-80 text-green-800">
            <span className={styles.inactive}>S</span>
            <span>M</span>
            <span className={styles.inactive}>L</span>
            <span className={styles.inactive}>XL</span>
            <span>XXL</span>
          </div>
          <div className="">
            <p className={"text-right text-2xl font-[600] " + styles.price}>
              {getPrice()}zł
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
