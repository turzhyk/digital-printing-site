import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import React from "react";
import styles from "@/app/shop/page.module.css";
import { ShopHeader } from "@/app/components/ShopHeader/ShopHeader";
import ShopSidebar from "@/app/components/ShopSidebar/ShopSidebar";
export default function page() {
  return (
    <React.Fragment>
      <div className="pt-20" />
      <ShopHeader/>
      
      <div className="pt-10 flex justify-center gap-4 w-[80%] m-auto">
      <ShopSidebar/>
      <div className="w-[60rem]  m-auto ">
        <div className="border-default w-full h-15 mb-10"><input></input></div>
        <div className={styles.cards_wrapper}>
          <ProductCard price={32} />
          <ProductCard price={32} sale={50} />
          <ProductCard price={18} />
          <ProductCard price={40} />
          <ProductCard price={37} />
        </div>
      </div></div>
    </React.Fragment>
  );
}
