// import { useState } from "react";
import "react";
import { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";

function App() {
  // //{"id":1,"name":"John Doe","course":"Computer Science"}

  // const [students, setStudents] = useState([]);
  // const [count, setCount] = useState(0);

  // const [name, setName] = useState("");
  // const [course, setCourse] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const getStudents = async () => {
  //   const response = await fetch("http://localhost:8081/students");
  //   const data = await response.json();
  //   setStudents(data);
  // };

  // const getMCAStudents = async () => {
  //   const response = await fetch("http://localhost:8081/students/MCA");
  //   const data = await response.json();
  //   setStudents(data);
  // };

  // const fetchTotalStudentCount = async () => {
  //   const response = await fetch("http://localhost:8081/students/count");
  //   const data = await response.json();
  //   setCount(data);
  // };

  // const addStudent = async () => {
  //   const response = await fetch("http://localhost:8081/students", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, course }),
  //   });

  //   if (response.ok) {
  //     alert("Student registered successfully!");
  //   } else {
  //     alert("Failed to register student.");
  //   }
  // };

  // const login = async () => {
  //   const response = await fetch("http://localhost:8081/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   });

  //   if (response.ok) {
  //     alert("Login successful!");
  //   } else {
  //     alert("Login failed.");
  //   }
  // };

  // const loginWithGoogle = () => {
  //   window.location.href = "http://localhost:8081/oauth2/authorization/google";
  // };

  // return (
  //   <div>
  //     <button onClick={getStudents}>fetch Students</button>

  //     <button onClick={getMCAStudents}>fetch MCA Students</button>

  //     <ul>
  //       {students.map((student) => (
  //         <li key={student.id}>
  //           {student.name} - {student.course}
  //         </li>
  //       ))}
  //     </ul>

  //     <button onClick={fetchTotalStudentCount}>
  //       Fetch Total Student Count
  //     </button>
  //     <p>Total Students: {count}</p>

  //     <h1>Student Registration Form</h1>
  //     <input
  //       type="text"
  //       placeholder="Name"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     ></input>

  //     <input
  //       type="text"
  //       placeholder="Course"
  //       value={course}
  //       onChange={(e) => setCourse(e.target.value)}
  //     ></input>
  //     <button onClick={addStudent}>Register</button>

  //     <br></br>
  //     <br></br>

  //     <input
  //       placeholder="Enter Username"
  //       value={username}
  //       onChange={(e) => setUsername(e.target.value)}
  //     ></input>

  //     <input
  //       placeholder="Enter Password"
  //       type="password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     ></input>

  //     <button onClick={login}>Login</button>
  //     <button onClick={loginWithGoogle}>Login with Google</button>
  //   </div>
  // );
  const [students, setStudents] = useState([]);
  const fetchStudents = async () => {
    const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc4MTc3MTMxNiwiZXhwIjoxNzgxODA3MzE2LCJyb2xlIjoiYWRtaW4ifQ.dKmqoAPdQwtNjddvPlTZ5cYavoC7mJ00QwSE1peagvL-uHan880RMhVHPHKHO5C8";
     const response = await fetch("http://localhost:8081/students", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    setStudents(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchStudents();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Student Management System</h1>

      <StudentForm refreshStudents={fetchStudents} />

      <hr />

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
        />
      ))}
    </div>
  );
}

export default App;
