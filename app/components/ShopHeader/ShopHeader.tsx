import React from "react";
import styles from "@/app/shop/page.module.css";
import { shopCategories } from "@/app/data/categories";
import Link from "next/link";
export const ShopHeader = () => {
  return (
    <nav
      className={
        "w-full h-[3rem] flex justify-center koho-semibold items-center sticky top-[3.45rem] " +
        styles.top_categories
      }
    >
      <ul>
        {shopCategories.map((item, i) => {
          if (item === "DIVIDER")
            return (
              <li
                key={`divider-${i}`}
                className={styles.vt}
                aria-hidden="true"
              />
            );
          else
            return (
              <li key={i}>
                <Link href={"/shop/" + item.replace(" ", "")}>{item}</Link>
              </li>
            );
        })}
      </ul>
    </nav>
  );
};
