import React from 'react'
import { motion } from 'framer-motion'
import javap from '../assets/javap.png'
import html from '../assets/html.png'
import spboot from '../assets/spboot.png'
import css from '../assets/css.png'
import javas from '../assets/javas.png'
import mysql from '../assets/mysql.png'

const Notes = () => {
  // Link opener functions
  function openLink1() {
    window.open("https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/Java_Complete_Notes.pdf", "_blank")
  }
  function openLink2() {
    window.open("https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/HTML_Complete_Notes.pdf", "_blank")
  }
  function openLink3() {
    window.open("https://drive.google.com/file/d/1G0avg8Tjo6GELiccQnn0yk4mR_R0XbGT/view", "_blank")
  }
  function openLink4() {
    window.open("https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/CSS_Complete_Notes.pdf", "_blank")
  }
  function openLink5() {
    window.open("https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/JS_Chapterwise_Notes.pdf", "_blank")
  }
  function openLink6() {
    window.open("https://drive.google.com/file/d/1ecm3fiUZZEgdyjSsEM9uc5FX0Q2Rnoio/view", "_blank")
  }

  const noteLinks = [
    { img: javap, onClick: openLink1, title: 'Java Notes' },
    { img: html, onClick: openLink2, title: 'HTML Notes' },
    { img: spboot, onClick: openLink3, title: 'Spring Boot Notes' },
    { img: css, onClick: openLink4, title: 'CSS Notes' },
    { img: javas, onClick: openLink5, title: 'JavaScript Notes' },
    { img: mysql, onClick: openLink6, title: 'MySQL Notes' }
  ]

  return (
    <section id="notes" className="px-6 bg-black-600 text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Subject Notes
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Welcome to <span className="text-blue-500 font-semibold">MASTER QUIZ</span> – Your Ultimate Programming Resource!
        </motion.p>

        <motion.p
          className="text-gray-400 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Are you passionate about programming or just starting your journey? We provide clean, concise notes to help you grow confidently in your coding career.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {noteLinks.map((note, idx) => (
            <motion.div
              key={idx}
              onClick={note.onClick}
              className="cursor-pointer group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-xl shadow-md bg-gray-900 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={note.img}
                  alt={note.title}
                  className="w-full rounded-2xl h-40 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center mt-2 text-sm text-gray-300 font-medium">{note.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Notes
