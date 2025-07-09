import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Lottie from 'lottie-react'
import Shimmer from './../assets/Loading.json'

const apiMap = {
  java: 'http://localhost:8080/api/java',
  python: 'http://localhost:8080/api/python',
  js: 'http://localhost:8080/api/js',
  mysql: 'http://localhost:8080/api/mysql'
}

const Exam = () => {
    const user = useSelector((store) => store.user);
  const { lang } = useParams()
  const navigate = useNavigate()

  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  useEffect(() => {
    const fetchQuestions = async () => {
      if(!user){
        navigate('/login')
      }
      const url = apiMap[lang];
      if (!url) {
        console.error('Invalid quiz type:', lang);
        return;
      }
  
      const token = localStorage.getItem('token'); // Assuming 'token' is your JWT key
      if (!token) {
        console.error('No token found in localStorage');
        return;
      }
  
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) throw new Error('Failed to fetch questions');
  
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };
  
    fetchQuestions();
  }, [lang]);
  

  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex]
    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectAnswers((prev) => prev + 1)
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      // Quiz completed
      localStorage.setItem('quizScore', correctAnswers + (selectedOption === currentQuestion.correctAnswer ? 1 : 0))
      localStorage.setItem('totalQuestions', questions.length)
      navigate('/result') // Navigate to result page
    }
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Lottie animationData={Shimmer} loop style={{ width: 400, height: 400 }} />
      </div>
    )
  }
  

  const current = questions[currentQuestionIndex]

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center capitalize">{lang} Quiz</h1>

        <div className="flex justify-between mb-4 text-gray-400 text-sm">
          <div>Time: <span id="timer">--</span></div>
          <div>Question {currentQuestionIndex + 1} of {questions.length}</div>
        </div>

        <div className="text-xl font-semibold mb-6">{current.questionText}</div>

        <div className="grid gap-4 mb-6">
          {current.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswerClick(opt)}
              className="bg-gray-800 hover:bg-blue-600 transition px-4 py-3 rounded text-left"
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="text-right">
          <button
            onClick={() => handleAnswerClick(null)}
            className="text-sm text-gray-400 hover:text-white hover:underline"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  )
}

export default Exam
