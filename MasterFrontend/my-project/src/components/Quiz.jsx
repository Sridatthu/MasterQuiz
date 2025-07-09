import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import javaImg from '../assets/java.png'
import pythonImg from '../assets/python.jpg'
import jsImg from '../assets/js.png'
import mysqlImg from '../assets/mysql.png'

const quizData = [
  {
    title: 'Java',
    description: 'Engaging Java quiz to test coding skills',
    image: javaImg,
    key: 'java'
  },
  {
    title: 'Python',
    description: 'Engaging Python quiz to test coding skills',
    image: pythonImg,
    key: 'python'
  },
  {
    title: 'JavaScript',
    description: 'Engaging JavaScript quiz to test coding skills',
    image: jsImg,
    key: 'js'
  },
  {
    title: 'MySQL',
    description: 'Engaging MySQL quiz to test coding skills',
    image: mysqlImg,
    key: 'mysql'
  }
]

const Quiz = () => {
  const navigate = useNavigate()

  const startQuiz = (lang) => {
    navigate(`/exam/${lang}`)
  }

  return (
    <section className="py-20 bg-black text-white px-6" id="quiz-packages">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Coding Quiz
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Welcome to <span className="text-blue-500 font-semibold">MASTER QUIZ</span> – Your Ultimate Programming Quiz!
        </motion.p>
        <motion.p
          className="text-gray-400 max-w-3xl mx-auto mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Test your coding knowledge with our interactive Programming Languages Quiz!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {quizData.map((quiz, index) => (
            <motion.div
              key={quiz.key}
              className="bg-gray-900 rounded-xl shadow-lg p-5 text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={quiz.image}
                alt={quiz.title}
                className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
              />
              <h2 className="text-xl font-semibold text-white mb-2">{quiz.title}</h2>
              <p className="text-gray-400 text-sm mb-3">{quiz.description}</p>
              <span className="inline-block bg-green-200 text-green-800 text-xs font-bold px-3 mx-5 py-1 rounded-full mb-4">
                FREE
              </span>
              <button
                className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={() => startQuiz(quiz.key)}
              >
                Take Quiz
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quiz
