import React from "react";
import { Recomendations } from "./components/Recomendations/Recomendations";

export default function page() {
  return (
    <div className="h-1000 pt-20 flex flex-col justify-start items-center">
      <Recomendations />
      <div className="main-panel w-screen h-150 text-white">
        <div className="flex justify-between p-20">
          <h1 className="koho-bold text-4xl ml-15">Witamy</h1>
          <img className="w-180 rounded-4xl shadow-xl" src="bizhub.webp" />
        </div>
      </div>
    </div>
  );
}
