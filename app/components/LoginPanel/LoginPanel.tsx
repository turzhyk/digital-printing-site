import React from "react";
import styles from "./LoginPanel.module.css";

export const LoginPanel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <div className={styles.bg}><img src="/printer.png" className="w-80 mt-80 ml-7"/></div>
        <div>
          <div className="flex justify-end p-5">
            <button className=" cursor-pointer w-6 block">
              <img src="/svg/UI/close.svg" />
            </button>
          </div>
          <h2 className="text-center  block font-[500]">Założ konto</h2>
          <section className="flex justify-center">
            <h3>Już masz konto?&nbsp;</h3>
            <button className="underline font-extrabold cursor-pointer">
              Zaloguj
            </button>
          </section>
          <section className="mt-20">
            <div className={styles.input}>
              <p>email:</p>
              <input placeholder="user@mail.com" type="email" />
            </div>
             <div className={styles.input}>
              <p>hasło:</p>
              <input placeholder="hasło" type="password" />
            </div>
          </section>
          <div className="flex justify-end m-10 mt-20"><button className={styles.next_btn+" border-default"}>Dalej</button></div>
        </div>
      </div>
    </div>
  );
};
