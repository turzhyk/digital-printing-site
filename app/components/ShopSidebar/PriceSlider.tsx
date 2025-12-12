'use client'
import { Range } from "react-range";
import { useState } from "react";

export default function PriceSlider() {
  const [values, setValues] = useState([20, 80]);

  return (
    <div style={{ padding: 20, width: 300 }}>
      <Range
        step={1}
        min={0}
        max={100}
        values={values}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              height: "6px",
              width: "100%",
              backgroundColor: "grey",
              borderRadius: 3,
              position: "relative"
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              height: "18px",
              width: "18px",
              marginTop: "0px",
              backgroundColor: "var(--accent-color1)",
              borderRadius: "50%"
            }}
          />
        )}
      />
      <div style={{ marginTop: 10 }}>
        {values[0]} — {values[1]}
      </div>
    </div>
  );
}
