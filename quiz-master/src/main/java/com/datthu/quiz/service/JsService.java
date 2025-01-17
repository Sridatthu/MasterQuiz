package com.datthu.quiz.service;

import com.datthu.quiz.entity.JsQuestion;
import com.datthu.quiz.repo.JsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JsService {

    @Autowired
    JsRepo jsRepo;

    public List<JsQuestion> getAllQuestions()
    {
        List<JsQuestion> jsRepoAll = jsRepo.findAll();
        return jsRepoAll;
    }

    public JsQuestion saveQuestion(JsQuestion question){
        JsQuestion save = jsRepo.save(question);
        return save;
    }
}
