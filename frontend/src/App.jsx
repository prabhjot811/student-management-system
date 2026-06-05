import { useState } from "react";

function App(){

    //{"id":1,"name":"John Doe","course":"Computer Science"}

    const [students, setStudents] = useState([]);
    
    const getStudents = async () => {
        
            const response = await fetch('http://localhost:8081/students');
            const data = await response.json();
            setStudents(data);
        
    };

    const getMCAStudents = async () => {
        const response = await fetch('http://localhost:8081/students/MCA');
        const data = await response.json();
        setStudents(data);
    };

    return (
        <div>
            <button onClick={getStudents}>
                fetch Students
            </button>

            <button onClick={getMCAStudents}>
                fetch MCA Students
            </button>

            

            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.course}
                    </li>
                ))}
            </ul>


        </div>
    )
}
export default App;
