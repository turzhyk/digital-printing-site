import React from "react";
import styles from "./page.module.css";
export default function page() {
  return (
    <div className="m-auto w-[68rem] pt-30 h-[40rem]">
      <h1 className={`text-center`}>
        Już masz <strong>projekt</strong>?
      </h1>
      <p className="mb-5 font-[500] text-center">
        Wgraj swoją grafike albo zaprojektuj swoją
      </p>
      <div className="flex justify-center gap-[1rem]">
        <a className={styles.element + " border-default"}>
          <div className="m-[2rem] grow flex flex-col justify-between">
            <img src="/svg/own_project.svg" style={{ width: "8rem" }} />{" "}
            <h2>Własny projekt</h2>
            <p>Mam własny projekt i chcę go użyć</p>
          </div>
          <img className={styles.icon} src="/svg/arrow_down.svg" />
        </a>
        <a
          href="/services/businesscard/makets"
          className={styles.element + " border-default"}
        >
          <div className="m-[2rem] grow flex flex-col justify-between">
            <img src="/svg/make_design.svg" /> <h2>Zaprojektuj grafike</h2>
            <p>Użyj jeden z szablonów i wypełnij swoje dane</p>
          </div>
          <img className={styles.icon} src="/svg/arrow_down.svg" />
        </a>
      </div>
    </div>
  );
}
