import React from "react";

export default function page() {
  return (
    <div className="flex flex-col m-auto w-270">
      <div className="flex items-center m-4 mb-0">
        <h1 className="m-5 ml-0">Produkcja firmowa</h1>
        <div className="h-10 grow bg-violet-200 "></div>
      </div>
      <div className="menu-buttons m-5 mt-0">
        <button className="product-btn border-default">
          <img src="svg/stomps.svg" />
          <div className="product-btn-title">Pieczątki</div>
        </button>
        <button className="product-btn border-default">
          <img src="svg/businesscards.svg" />
          <div className="product-btn-title">Wizytówki</div>
        </button>
        <button className="product-btn border-default">
          <img src="svg/brochures.svg" />
          <div className="product-btn-title">Broszury</div>
        </button>
        <button className="product-btn border-default">
          <img src="svg/catalogs1.svg" className="mt-10"/>
          <div className="product-btn-title">Katalogi</div>
        </button>
         <button className="product-btn border-default">
          <img src="svg/identifiers.svg" />
          <div className="product-btn-title">Identyfikatory</div>
        </button>
         <button className="product-btn border-default">
          <img src="svg/folders.svg" />
          <div className="product-btn-title">Teczki</div>
        </button>
          <button className="product-btn border-default">
          <img src="svg/signs.svg" />
          <div className="product-btn-title">Tabliczki grawerowane</div>
        </button>
          <button className="product-btn border-default">
          <img src="svg/stands.svg" />
          <div className="product-btn-title">Standy</div>
        </button>
         <button className="product-btn border-default">
          <img src="svg/badges.svg" />
          <div className="product-btn-title">Przypinki</div>
        </button>
         <button className="product-btn border-default">
          <img src="svg/pens.svg" />
          <div className="product-btn-title">Długopisy grawerowane</div>
        </button>
          <button className="product-btn border-default">
          <img src="svg/flyers.svg" />
          <div className="product-btn-title">Ulotki</div>
        </button>
         <button className="product-btn border-default ">
           <div className="wrapper"><div className="tag-new">od <strong>15zł!</strong></div></div> 
          <img src="svg/mug.svg" />
          <div className="product-btn-title">Kubki z nadrukiem</div>
        </button>
      </div>
    </div>
  );
}
