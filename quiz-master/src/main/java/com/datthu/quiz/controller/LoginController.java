package com.datthu.quiz.controller;

import com.datthu.quiz.Utils.JWTUtil;
import com.datthu.quiz.dto.LoginRequest;
import com.datthu.quiz.entity.*;
import com.datthu.quiz.repo.UserRepo;
import com.datthu.quiz.service.JsService;
import com.datthu.quiz.service.MysqlService;
import com.datthu.quiz.service.PythonService;
import com.datthu.quiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class LoginController {


    @Autowired
    QuestionService questionService;
    @Autowired
    MysqlService mysqlService;
    @Autowired
    JsService jsService;
    @Autowired
    PythonService pythonService;
    @Autowired
    UserRepo userRepo;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    JWTUtil jwtUtil;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody LoginRequest loginRequest) {
        if (userRepo.findByUsername(loginRequest.getUsername()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists.");
        }

        User user = User.builder()
                .username(loginRequest.getUsername())
                .password(passwordEncoder.encode(loginRequest.getPassword()))
                .role("ROLE_USER")
                .build();

        User savedUser = userRepo.save(user);
        String token = jwtUtil.generateToken(savedUser.getUsername());

        return ResponseEntity.ok(Map.of(
                "message", "User Added successfully!",
                "token", token,
                "data", savedUser
        ));
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        java.util.Optional<User> userOpt = userRepo.findByUsername(loginRequest.getUsername());
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        User user = userOpt.get();
        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getUsername());

        return ResponseEntity.ok(Map.of(
                "message", "Login successful",
                "token", token,
                "data", user.getUsername()
        ));
    }
    @GetMapping("/java")
    public List<QuizQuestion> getQuestions() {
            return questionService.getAllQuestions();
    }

    @PostMapping(value = "/save", consumes = "application/json", produces = "application/json")
    public QuizQuestion saveQuestion(@RequestBody QuizQuestion question) {
        return questionService.saveQuestion(question);
    }
    @GetMapping("/js")
    public List<JsQuestion> getJSQuestions() {
        return jsService.getAllQuestions();
    }

    @PostMapping(value = "/save/js", consumes = "application/json", produces = "application/json")
    public JsQuestion saveJSQuestion(@RequestBody JsQuestion question) {

        return jsService.saveQuestion(question);
    }
    @GetMapping("/python")
    public List<PythonQuestion> getPythonQuestions() {
        return pythonService.getAllQuestions();
    }

    @PostMapping(value = "/save/python", consumes = "application/json", produces = "application/json")
    public PythonQuestion saveMysqlQuestion(@RequestBody PythonQuestion question) {
        return pythonService.saveQuestion(question);
    }
    @GetMapping("/mysql")
    public List<MysqlQuestion> getMysqlQuestions() {
        return mysqlService.getAllQuestions();
    }

    @PostMapping(value = "/save/mysql", consumes = "application/json", produces = "application/json")
    public MysqlQuestion saveJsQuestion(@RequestBody MysqlQuestion question) {
        return mysqlService.saveQuestion(question);
    }


}
