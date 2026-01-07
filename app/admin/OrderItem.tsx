import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getHistory, IHistoryElement, takeOrder } from "../data/ordersFetcher";
import { doc } from "firebase/firestore";
export const OrderItem = (props: { doc: any }) => {
  const [historyOpened, setHistoryOpened] = useState<Boolean>(false);
  const [history, setHistory] = useState<IHistoryElement[]>([]);
  useEffect(() => {
    const loadHistory = async () => {
      const h = await getHistory(props.doc.id);
      setHistory(h);
    };

    loadHistory();
  }, [props.doc.id]);
  return (
    <li className={styles.order_item} key={props.doc.id}>
      <div className={styles.order_collums}>
        <div>
          <p>
            order date: {props.doc.createdAt.toDate().toLocaleString("ru-RU")} (
            {})
          </p>
          <p>id: {props.doc.id}</p> <p>{props.doc.summary}</p>{" "}
        </div>
        <div>
          <p>customer: {props.doc.customer_id}</p>
          <p>price: {props.doc.total_price}zł</p>
        </div>
      </div>
      <div className="mb-2">Activity history:</div>
      <div className="flex flex-col gap-2">
        {history.map((item) => (
          <div key={item.title} className={styles.order_history_el+" "}>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{new Date(item.date).toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div
        className={
          styles.order_status +
          " " +
          (props.doc.status == "new"
            ? styles.order_status_new
            : styles.order_status_inProgress)
        }
      >
        <span className="flex">
          <img width={30} src="/svg/UI/personal.svg" />
          {props.doc.assignedPersonId}
        </span>
        <span>{props.doc.status}</span>
        <button
          onClick={() => {
            takeOrder(props.doc.id, "1");
          }}
        >
          Take It
        </button>
      </div>
    </li>
  );
};
