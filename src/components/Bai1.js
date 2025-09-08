import React, { useState } from "react";

const Dem = ({ value }) => <div>Giá trị hiện tại: {value}</div>;

export default function Bai1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Bài 1: Ứng dụng Đếm số</h2>
      <Dem value={count} />
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <hr />
    </div>
  );
}