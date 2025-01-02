import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, BarChart } from 'lucide-react';
// import { DIFFICULTY_COLORS } from '../utils/constants';
import { DIFFICULTY_COLORS } from './utils/constants';
import { easeIn, easeInOut, motion } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';

export function QuizCard({ id, title, description, difficulty, duration, totalQuestions, image }) {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const variants = {
    hidden: { x: '100%', opacity: 0 }, // حالت پنهان: خارج از صفحه و شفافیت 0
    visible: { x: 0, opacity: 1 }, // حالت قابل مشاهده: در موقعیت اصلی و شفافیت 1
    transition: {
      easeInOut: 'linear'
    }
  };

  return (
    <>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <Link to={`/quiz/${id}`} className="block">
        <motion.div initial="hidden" // شروع با حالت پنهان
          animate="visible" // انیمیشن به حالت قابل مشاهده
          variants={variants} // تعیین حالت‌ها
          transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${DIFFICULTY_COLORS[difficulty]}`}>
                {difficulty}
              </span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
            <div className="flex items-center justify-between text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{duration} mins</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>{totalQuestions} questions</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart className="w-4 h-4" />
                <span>{difficulty}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  );
}