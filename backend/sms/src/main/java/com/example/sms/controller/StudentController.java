package  com.example.sms.controller;

import com.example.sms.model.Student;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.ArrayList;
import java.util.*;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {
    
    @GetMapping
    public ArrayList<Student> getStudents() {
        ArrayList<Student> students = new ArrayList<>();
        students.add(new Student(1, "Prabhjot Singh", "MCA"));
        students.add(new Student(2, "Navroop", "BCA"));
        students.add(new Student(3, "Amanpreet Kaur", "MCA"));

        return students;
    }

    @GetMapping("/MCA")
    public List<Student> getMCAStudents() {
        return getStudents().stream()
                .filter(student -> "MCA".equals(student.getCourse()))
                .collect(Collectors.toList());
    }
    }


