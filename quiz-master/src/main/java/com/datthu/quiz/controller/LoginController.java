package com.datthu.quiz.controller;

import com.datthu.quiz.dto.LoginRequest;
import com.datthu.quiz.entity.JsQuestion;
import com.datthu.quiz.entity.MysqlQuestion;
import com.datthu.quiz.entity.PythonQuestion;
import com.datthu.quiz.entity.QuizQuestion;
import com.datthu.quiz.service.JsService;
import com.datthu.quiz.service.MysqlService;
import com.datthu.quiz.service.PythonService;
import com.datthu.quiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    // Hardcoded credentials for now
    private final String USERNAME = "user";
    private final String PASSWORD = "password";

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        if (USERNAME.equals(loginRequest.getUsername()) && PASSWORD.equals(loginRequest.getPassword())) {
            return "Login Successful!";
        } else {
            return "Invalid username or password";
        }
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
