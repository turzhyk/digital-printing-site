import React from "react";
import styles from "./page.module.css";
import { koho } from "../layout";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Recomendations } from "../components/Recomendations/Recomendations";
import { ShopHeader } from "../components/ShopHeader/ShopHeader";
export default function page() {
  return (
    <React.Fragment>
      <div className="pt-20" />
      <ShopHeader/>
      <div className="w-[60rem]  m-auto pt-15">
        <Recomendations />
        <h1 className="mt-8 mb-4">Polecane</h1>
        <div className={styles.cards_wrapper}>
          <ProductCard price={32} />
          <ProductCard price={32} sale={50}/>
          <ProductCard price={18} />
          <ProductCard price={40} />
             <ProductCard price={37}/>
        </div>
        <h1 className="mt-20 mb-4">Kategorie</h1>
        <div className={styles.categories_wrapper + " font-[600]"}>
          <div className={styles.category + " border-default"}>
            <img src="icons/3d/mug.svg" /> <h3>Kubki z nadrukiem</h3>
          </div>
          <div className={styles.category + " border-default"}>
            <img src="icons/3d/mug.svg" /> <h3>Kubki z nadrukiem</h3>
          </div>{" "}
          <div className={styles.category + " border-default"}>
            <img src="icons/3d/mug.svg" /> <h3>Kubki z nadrukiem</h3>
          </div>
          <div className={styles.category + " border-default"}>
            <img src="icons/3d/mug.svg" /> <h3>Kubki z nadrukiem</h3>
          </div>
           <div className={styles.category + " border-default"}>
            <img src="icons/3d/mug.svg" /> <h3>Kubki z nadrukiem</h3>
          </div>
           <div className={styles.category + " border-default"}>
            <img src="icons/3d/mug.svg" /> <h3>Kubki z nadrukiem</h3>
          </div>
           <div className={styles.category + " border-default"}>
            <img src="icons/3d/mug.svg" /> <h3>Kubki z nadrukiem</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
