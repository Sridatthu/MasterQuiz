package com.datthu.quiz.service;

import com.datthu.quiz.entity.PythonQuestion;
import com.datthu.quiz.repo.PythonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PythonService {

    @Autowired
    PythonRepo pythonRepo;

    public List<PythonQuestion> getAllQuestions()
    {
        List<PythonQuestion> pythonRepoAll = pythonRepo.findAll();
        return pythonRepoAll;
    }

    public PythonQuestion saveQuestion(PythonQuestion question){
        PythonQuestion save = pythonRepo.save(question);
        return save;
    }
}
