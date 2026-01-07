"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { db } from "@/app/data/firebase";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { addServiceOrder, fetchServiceOrders, takeOrder } from "../data/ordersFetcher";
import { OrderItem } from "./OrderItem";
export default function page() {
  const [data, setData] = useState<any[]>([]);
  const myId: string = "23";

  

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchServiceOrders();
      setData(data);
    };

    loadData();
  }, []);
  return (
    <div>
      <h1>Документы</h1>
      <button onClick={addServiceOrder} className="mt-20">
        ADD ORDER
      </button>
      <ul className={styles.order_wrapper + " mt-50"}>
        {data.map((doc) => {
          const diffMs = Date.now() - doc.createdAt.toDate();
          const diffSeconds = Math.floor(diffMs / 1000);
          const diffMinutes = Math.floor(diffSeconds / 60);
          const diffHours = Math.floor(diffMinutes / 60);
          const diffDays = Math.floor(diffHours / 24);
          return (
           <OrderItem key={doc.id} doc={doc}/>
          );
        })}
      </ul>
    </div>
  );
}
