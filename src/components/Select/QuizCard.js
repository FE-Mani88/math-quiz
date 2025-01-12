import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, BarChart, CheckCircle } from 'lucide-react';
// import { DIFFICULTY_COLORS } from '../utils/constants';
import { DIFFICULTY_COLORS } from './utils/constants';
import { easeIn, easeInOut, motion } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';
import { quizStorage } from './utils/quizStorage';

export function QuizCard({ id, title, description, difficulty, duration, totalQuestions, image }) {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const isCompleted = quizStorage.isQuizCompleted(id);
  console.log(isCompleted);

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
      <Link to={`/quiz/${id}`} className="block relative hover:translate-y-[-8px] transition-all duration-300">
        <motion.div initial="hidden" // شروع با حالت پنهان
          animate="visible" // انیمیشن به حالت قابل مشاهده
          variants={variants} // تعیین حالت‌ها
          transition={{ duration: 0.5 }} className="bg-white dark:bg-[#293546] rounded-xl shadow-lg overflow-hidden">
          {isCompleted && (
            <div className="absolute -top-2 -right-2 z-10">
              <CheckCircle className="w-8 h-8 text-green-500 bg-white rounded-full" />
            </div>
          )}

          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">{title}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${DIFFICULTY_COLORS[difficulty]}`}>
                {difficulty === 'hard' ? 'سخت' : difficulty === 'medium' ? 'متوسط' : 'آسان'}
              </span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-2 dark:text-gray-300">{description}</p>
            <div className="flex items-center justify-between text-gray-500">
              <div className="flex items-center space-x-2 gap-1 dark:text-white">
                <Clock className="w-4 h-4" />
                <span>{duration} دقیقه</span>
              </div>
              <div className="flex items-center space-x-2 dark:text-white gap-1">
                <BookOpen className="w-4 h-4" />
                <span>{totalQuestions} سوال</span>
              </div>
              <div className="flex items-center gap-1 space-x-2 dark:text-white">
                <BarChart className="w-4 h-4" />
                <span>{difficulty === 'hard' ? 'سخت' : difficulty === 'medium' ? 'متوسط' : 'آسان'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  );
}