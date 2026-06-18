import { useState } from "react";

function StudentForm({ refreshStudents }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = async () => {
    const token =
      "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc4MTc3MTMxNiwiZXhwIjoxNzgxODA3MzE2LCJyb2xlIjoiYWRtaW4ifQ.dKmqoAPdQwtNjddvPlTZ5cYavoC7mJ00QwSE1peagvL-uHan880RMhVHPHKHO5C8";
    await fetch("http://localhost:8081/students", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        course,
      }),
    });

    refreshStudents();
    alert("Student registered successfully!");
  };

  return (
    <div>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />

      <br />
      <br />

      <input placeholder="Course" onChange={(e) => setCourse(e.target.value)} />

      <br />
      <br />

      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default StudentForm;
