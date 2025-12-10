"use client";
import React, { useState } from "react";
import { BusinessCardData } from "../types";
import styles from "./Businesscard.module.css";
import { zalandoSans, koho } from "@/app/layout";
export default function Businesscard1(props: BusinessCardData) {
  const [bgColor, setBgColor] = useState<string>("#2F3C6A");
  return (
    <div
     style={{

        background: "#fff",
      }}
      className={styles.scale_dow +  " mt-10 shadow-md aspect-9/5 font-zalando"}
     
    >
      <div
        className="float-right h-full w-1/2 flex flex-col items-stretch justify-around text-white "
        style={{ backgroundColor: bgColor }}
      >
        {" "}
        <div className=" text-center m-[7%]">
          <h1
            className={"font-zalando font-[500] capitalize"}
            style={{ fontSize: "70%" }}
          >
            {props.name}
          </h1>
          <div className="text-[15%] uppercase">Dyrektor</div>
        </div>
        <div className="text-[12%] text-left ml-[9%]">
          <div>dasdiohndiasiodjdjo</div>
           <div>dasdiohndiasiodjdjo</div>
          <div>dasdiohndiasiodjdjo</div>
        </div>
      </div>

      <p className={"font-zalando font-[500]"}>{props.position}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}
