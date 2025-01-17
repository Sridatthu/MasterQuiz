package com.datthu.quiz.repo;

import com.datthu.quiz.entity.PythonQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PythonRepo extends JpaRepository<PythonQuestion,Long> {
}
