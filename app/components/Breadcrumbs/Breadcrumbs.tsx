"use client";
import React, { useEffect } from "react";
import styles from "./Breadcrumbs.module.css";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  shop: "Sklep",
  clothes: "Odzież",
  tshirts: "Koszulki",
};
export default function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  const crumbs = parts.map((part, i) => {
    const href = "/" + parts.slice(0, i + 1).join("/");
    const name = part;
    return { href, name };
  });
  return (
    <nav className="m-5 ml-25 koho-semibold opacity-70">
      <ul className="flex gap-2">
        <li>
          <a href="/">Główna</a>
        </li>
        {crumbs.map((c) => {
          return (
            <li key={c.href} className="flex gap-2 items-center">
              <img src={"/svg/UI/tri_right.svg"} />
              <a href={c.href}>
                {" "}
                {labels[c.name as keyof typeof labels] ?? c.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
