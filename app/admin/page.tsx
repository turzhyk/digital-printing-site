"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { db } from "@/app/data/firebase";
import { collection, getDocs } from "firebase/firestore";
export default function page() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "ServiceOrders"));
      const docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(docs);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Документы</h1>
      <ul className="mt-20">
        {data.map((doc) => (
          <li key={doc.id}>{doc.id} {doc.summary}</li>
        ))}
      </ul>
    </div>
  );
}
