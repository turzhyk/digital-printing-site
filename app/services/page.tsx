import React from "react";
import { ProductTag } from "../components/ProductTag/ProductTag";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Link from "next/link";

export default function page() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center m-auto pt-30">
        <h1 className="text-center block p-4">Usługi naszej drukarni</h1>
        <p className="block max-w-200 p-4">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </p>
        <a href="#firma">Firmowe</a>
      </div>
      
        <div className="m-auto flex flex-col items-center w-auto max-w-230">
          <div className=" w-full">
            <div className="flex items-center m-4 mb-0">
              <h1 className="m-5 ml-0">Druk</h1>
            </div>
            <div className="menu-buttons m-5 mt-0">
              <button className="product-btn border-default">
                <img width={130} src="svg/print.svg" />
                <div className="product-btn-title">Druk</div>
              </button>
              <button className="product-btn border-default">
                <img src="svg/ksero2.svg" />
                <div className="product-btn-title">Ksero</div>
              </button>
              <button className="product-btn border-default">
                <img src="svg/skan.svg" />
                <div className="product-btn-title">Kopija</div>
              </button>
            </div>
          </div>
          <div className="m-auto w-full">
            <div className="flex items-center m-4 mb-0">
              <h1 className="m-5 ml-0">Foto produkcja</h1>
            </div>
            <div className="menu-buttons m-5 mt-0">
              <button className="product-btn border-default">
                <img
                  style={{ width: 110, height: 110 }}
                  src="icons/categories/stomp.webp"
                />
                <div className="product-btn-title">Pieczątki</div>
              </button>
              <Link href="/services/businesscard" className="product-btn border-default">
                <img  style={{ width: 120, height: 110 }} src="icons/categories/businesscards2.png" />
                <div className="product-btn-title">Wizytówki</div>
              </Link>
              <button className="product-btn border-default">
                <img
                  style={{ width: 120, height: 110 }}
                  src="icons/categories/brochures.png"
                />
                <div className="product-btn-title">Broszury</div>
              </button>
              <button className="product-btn border-default">
                <img width={105} src="svg/catalogs1.svg" className="mt-10" />
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
                <img style={{ width: 140, height: 130 }} src="/icons/categories/tabliczki.png" />
                <div className="product-btn-title">Tabliczki grawerowane</div>
              </button>
              <button className="product-btn border-default">
                <img width={110} src="svg/stands.svg" />
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
                <img width={105} src="svg/flyers.svg" />
                <div className="product-btn-title">Ulotki</div>
              </button>
              <button className="product-btn border-default ">
                <ProductTag />
                <img width={120} src="svg/cup_and_mug.svg" />
                <div className="product-btn-title">
                  Kubki i filiżanki
                  <br /> z nadrukiem
                </div>
              </button>
              <button className="product-btn border-default ">
                <img width={100} src="svg/metka.svg" />
                <div className="product-btn-title">Metki</div>
              </button>
            </div>
          </div>
          <div className="m-auto w-full">
            <div className="flex items-center m-4 mb-0">
              <h1 id="firma" className="m-5 ml-0">Produkcja firmowa</h1>
              {/* <div className="h-10 grow bg-violet-200 "></div> */}
            </div>
            <div className="menu-buttons m-5 mt-0">
              <button className="product-btn border-default">
                <img width={100} src="svg/stomps.svg" />
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
                <img width={105} src="svg/catalogs1.svg" className="mt-10" />
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
                <img width={100} src="svg/stands.svg" />
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
                <img width={105} src="svg/flyers.svg" />
                <div className="product-btn-title">Ulotki</div>
              </button>
              <button className="product-btn border-default ">
                <ProductTag />
                <img width={120} src="svg/cup_and_mug.svg" />
                <div className="product-btn-title">
                  Kubki i filiżanki
                  <br /> z nadrukiem
                </div>
              </button>
            </div>
          </div>
        </div>
      
    </React.Fragment>
  );
}
