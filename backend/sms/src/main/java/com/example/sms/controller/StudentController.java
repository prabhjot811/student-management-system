package  com.example.sms.controller;

import com.example.sms.model.Student;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.sms.service.StudentService;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {


  

    @Autowired
    private StudentService service;

    // @GetMapping
    // public ArrayList<Student> getStudents() {
    //     ArrayList<Student> students = new ArrayList<>();
    //     students.add(new Student(1, "Prabhjot Singh", "MCA"));
    //     students.add(new Student(2, "Navroop", "BCA"));
    //     students.add(new Student(3, "Amanpreet Kaur", "MCA"));

    //     return students;
    // }

    @GetMapping("/MCA")
    public List<Student> getMCAStudents() {
        return getStudents().stream()
                .filter(student -> "MCA".equals(student.getCourse()))
                .collect(Collectors.toList());
    }

    @GetMapping("/count")
    public int countStudents(){
        return service.getStudentCount();
    }


    @GetMapping("/message")
    public String getStudentMessage() {
        return service.getStudentInfo();
    }

    @GetMapping
    public List<Student> getStudents()
    {
        return service.getAllStudents();
    }


    
    @PostMapping
    public Student addStudent(@RequestBody Student student)
    {
        return service.saveStudent(student);
    }
    

}


