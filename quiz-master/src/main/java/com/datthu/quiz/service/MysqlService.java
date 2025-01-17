package com.datthu.quiz.service;

import com.datthu.quiz.entity.MysqlQuestion;
import com.datthu.quiz.repo.MysqlRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MysqlService {

    @Autowired
    MysqlRepo mysqlRepo;

    public List<MysqlQuestion> getAllQuestions()
    {
        List<MysqlQuestion> mysqlRepoAll = mysqlRepo.findAll();
        return mysqlRepoAll;
    }

    public MysqlQuestion saveQuestion(MysqlQuestion question){
        MysqlQuestion save = mysqlRepo.save(question);
        return save;
    }
}
