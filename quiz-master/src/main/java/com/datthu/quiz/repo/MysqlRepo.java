package com.datthu.quiz.repo;

import com.datthu.quiz.entity.MysqlQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MysqlRepo extends JpaRepository<MysqlQuestion,Long> {
}
