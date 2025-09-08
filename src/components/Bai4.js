import React, { useState } from "react";

const TheSV = ({ student }) => {
  const [Thongtin, setThongtin] = useState(false);

  return (
    <div style={{ marginBottom: "15px", border: "1px solid #ccc", padding: "10px" }}>
      <div>
        <strong>{student.name}</strong>
      </div>
      <button onClick={() => setThongtin(!Thongtin)}>
        {Thongtin ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {Thongtin && (
        <div>
          Tuổi: {student.age} - Lớp: {student.class}
        </div>
      )}
    </div>
  );
};

export default function Bai4() {
  const [students] = useState([
    { id: 1, name: "Nguyễn Văn A", age: 20, class: "CNTT1" },
    { id: 2, name: "Trần Thị B", age: 21, class: "CNTT2" },
    { id: 3, name: "Lê Văn C", age: 19, class: "CNTT3" },
  ]);

  return (
    <div>
      <h2>Bài 4: Thông tin sinh viên</h2>
      {students.map((student) => (
        <TheSV key={student.id} student={student} />
      ))}
      <hr />
    </div>
  );
}