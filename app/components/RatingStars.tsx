import React from "react";

const starsCount = 5;
export const RatingStars = (props: { rating: number }) => {
  return (
    <div className="mt-2 mb-4 h-1rem flex gap-1">
      {Array.from({ length: starsCount }).map((_, i) => {
        const path =
          i < props.rating
            ? "/svg/UI/star_active.svg"
            : "/svg/UI/star_inactive.svg";
        return (
          <div key={i}>
            <img src={path} />
          </div>
        );
      })}
    </div>
  );
};
