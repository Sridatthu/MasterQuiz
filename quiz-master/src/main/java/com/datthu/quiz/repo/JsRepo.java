package com.datthu.quiz.repo;

import com.datthu.quiz.entity.JsQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JsRepo extends JpaRepository<JsQuestion,Long> {
}
