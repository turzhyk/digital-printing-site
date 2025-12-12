import React from "react";
import styles from "./ShopSidebar.module.css";
import PriceSlider from "./PriceSlider";
export default function ShopSidebar() {
  return (
    <div className="w-[20rem] border-default p-4">
      <h3 className="font-[400] text-2xl mb-5">Filtry</h3>
       <span className="flex justify-start">
        <h4 className="font-[600]">Cena</h4>
        <img className="m-2 w-4" src="/svg/arrow_down.svg"/>
      </span>
      {/* <div><PriceSlider/></div> */}
      <span className="flex justify-start">
        <h4 className="font-[600]">Kolor</h4>
        <img className="m-2 w-4" src="/svg/arrow_down.svg"/>
      {/* <ul>
        <li><input type="checkbox"><label>Czarny</label></input></li>
      </ul> */}
      </span>
       <span className="flex justify-start">
        <h4 className="font-[600]">Rozmiar</h4>
        <img className="m-2 w-4" src="/svg/arrow_down.svg"/>
      </span>
       <span className="flex justify-start">
        <h4 className="font-[600]">Material</h4>
        <img className="m-2 w-4" src="/svg/arrow_down.svg"/>
      </span>
    </div>
  );
}
