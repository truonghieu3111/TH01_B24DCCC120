// Bài 3
import React, { useState } from "react";

const MauNen = ({ color }) => (
  <div
    style={{
      width: "200px",
      height: "200px",
      backgroundColor: color,
      marginTop: "10px",
    }}
  />
);

export default function Bai3() {
  const [mau, setMau] = useState(null);
  const Maus = ["red", "green", "blue", "yellow"];

  return (
    <div>
      <h2>Bài 3: Ứng dụng đổi màu nền</h2>
      <div>
        {Maus.map((color, index) => (
          <button
            key={index}
            style={{
              backgroundColor: color,
              color: "white",
              margin: "5px",
              padding: "10px 20px",
            }}
            onClick={() => setMau(color)}
          >
            {color}
          </button>
        ))}
      </div>
      {}
      {mau && <MauNen color={mau} />}
      <hr />
    </div>
  );
}