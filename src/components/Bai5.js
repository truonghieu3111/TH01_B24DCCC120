import React, { useState, useEffect } from "react";

const ThoiGian = ({ time }) => <div>{time}</div>;

export default function Bai5() {
  const [Thoigian, setThoigian] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setThoigian(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

  return (
    <div>
      <h2>Bài 5: Đồng hồ</h2>
      <ThoiGian time={formatTime(Thoigian)} />
    </div>
  );
}