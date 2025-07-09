import React, { useState } from 'react'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Lottie animations
import homeAnimation from './../assets/shimmer.json'
import loadingAnim from './../assets/Loading.json'

const Hero = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleStart = () => {
    setLoading(true)

    // Delay to show animation before navigation
    setTimeout(() => {
      navigate('/quiz')
    }, 1000)
  }

  return (
    <section className="min-h-screen bg-black-600 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 overflow-hidden">
      {/* Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-snug">
          Welcome To <span className="text-blue-500">Master Quiz</span>
        </h1>
        <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
          Sharpen your coding skills with our interactive quizzes on Java, Python, JavaScript, and more.
        </p>

        <button
          onClick={handleStart}
          disabled={loading}
          className={`inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md font-semibold transition duration-300 ${
            loading ? 'cursor-not-allowed opacity-60' : 'hover:bg-blue-700'
          }`}
        >
          {loading ? (
            <Lottie animationData={loadingAnim} loop style={{ width: 40, height: 40 }} />
          ) : (
            'Start Now'
          )}
        </button>
      </motion.div>

      {/* Animation Section */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Lottie
          animationData={homeAnimation}
          loop
          style={{ width: 500, height: 500 }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
