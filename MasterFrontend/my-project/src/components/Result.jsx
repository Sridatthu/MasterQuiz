import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import successAnim from './../assets/success.json'
import failedAnim from './../assets/failed.json'

const Result = () => {
  const [score, setScore] = useState(null)
  const [total, setTotal] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedScore = localStorage.getItem('quizScore')
    const storedTotal = localStorage.getItem('totalQuestions')

    // Use timeout to give Redux time to hydrate (1 frame delay)
    setTimeout(() => {
      if (!storedScore || !storedTotal) {
        navigate('/')
      } else {
        setScore(parseInt(storedScore))
        setTotal(parseInt(storedTotal))
      }
    }, 0)
  }, [navigate])

  const handleResult = () => {
    localStorage.removeItem('quizScore')
    localStorage.removeItem('totalQuestions')
    navigate('/')
  }

  if (score === null || total === null) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-xl">
        Loading Result...
      </div>
    )
  }

  const percentage = ((score / total) * 100).toFixed(0)
  const passed = percentage >= 50

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-xl w-full text-center">
        <div className="w-60 h-60 mx-auto mb-6">
          <Lottie animationData={passed ? successAnim : failedAnim} loop={false} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {passed ? 'Congratulations! 🎉' : 'Better Luck Next Time!'}
        </h1>

        <p className="text-lg text-gray-300 mb-4">
          You scored <span className="text-blue-400 font-semibold">{score}</span> out of <span className="font-semibold">{total}</span>
        </p>

        <div className="bg-gray-800 rounded-full w-full h-5 overflow-hidden mb-6">
          <div
            className={`h-full ${passed ? 'bg-green-500' : 'bg-red-500'}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <button
          onClick={handleResult}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}

export default Result
