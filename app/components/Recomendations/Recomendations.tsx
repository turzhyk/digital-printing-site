"use client";
import React, { useEffect, useState } from "react";
export const Recomendations = () => {
  const [page, setPage] = useState(0);

  const totalPages = 3; // количество баннеров
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3000); // каждые 3 секунды

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);
  return (
    <div
      className="w-full h-[15rem] overflow-hidden relative"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${page * 60}rem)`, // ширина одного баннера!
        }}
      >
        <div className="text-center text-4xl bg-yellow-400 font-[600] pt-20 min-w-[60rem]">
          Reklamowy baner 1
        </div>
        <div className="text-center text-4xl bg-red-400 font-[600] pt-20 min-w-[60rem]">
          Reklamowy baner 2
        </div>
        <div className="text-center text-4xl bg-cyan-600 font-[600] pt-20 min-w-[60rem]">
          Reklamowy baner 2
        </div>
      </div>

      <button
        className="absolute right-4 bottom-4 bg-black text-white px-3 py-1"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
};
