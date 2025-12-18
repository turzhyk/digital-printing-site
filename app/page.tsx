import React from "react";
import { Recomendations } from "./components/Recomendations/Recomendations";

export default function page() {
  return (
    <div className="h-1000 pt-20 flex flex-col justify-start items-center">
      {/* <Recomendations /> */}
      <div className="main-panel w-screen h-150 text-white">
        <nav className="m-auto mt-0 sticky top-14 backdrop-blur-xs p-4">
          <ul className="flex w-full justify-center gap-6">
            <li className="home-category">
              <img src="/svg/UI/cat_gadzety.svg" />
              <span className="cursor-pointer">Personalizowane gadżety</span>
            </li>
             <li className="home-category">
              <img src="/svg/UI/cat_foto.svg" />
              <span className="cursor-pointer">Fotoprodukcja</span>
            </li>
            <li className="home-category">
              <img src="/svg/UI/cat_reklamowe.svg" />
              <span className="cursor-pointer">Produkty reklamowe</span>
            </li>
            <li className="home-category">
              <img src="/svg/UI/cat_buira.svg" />
              <span className="cursor-pointer">Dla biur</span>
            </li>
            <li className="home-category">
              <img src="/svg/UI/cat_projektowanie2.svg" />
              <span className="cursor-pointer">Usługi projektowania</span>
            </li>
          </ul>
        </nav>
        <div className="flex justify-between w-full p-20 pl-40 pr-40">
          <section>
            <h1>
              Witamy na stronie <strong>Digital Printing</strong>
            </h1>
            <p>Coś tam o firmie i jaka ona jest świetna</p>
          </section>
          <section className="max-w-150 w-150">
            <h2 className="center w-full">Nowośći</h2>
            <div className="w-full mt-4 mb-4">
              <div className="flex justify-between">
                <span>21.12.2025</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in
              </p>
            </div>
            <hr />
            <div className="w-full mt-4 mb-4">
              <div className="flex justify-between">
                <span>21.12.2025</span>
              </div>
              <p>
               Urodziny 🎂🎈🎈🎈 <code>06.06.2027</code>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
