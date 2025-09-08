// Bài 2
import React, { useState } from "react";

export default function Bai2() {
  const [Viec, setViec] = useState([]);
  const [inputViec, setInputViec] = useState("");

  const ThemCV = () => {
    if (inputViec.trim() !== "") {
      setViec([...Viec, inputViec]);
      setInputViec("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      ThemCV();
    }
  };

  return (
    <div>
      <h2>Bài 2: Danh sách công việc</h2>
      <div>
        <input
          type="text"
          placeholder="Nhập công việc mới..."
          value={inputViec}
          onChange={(e) => setInputViec(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={ThemCV}>Thêm</button>
      </div>
      <ul>
        {Viec.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}