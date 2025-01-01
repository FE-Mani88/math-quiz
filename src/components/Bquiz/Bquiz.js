import React, { useState, useEffect } from 'react';
import { Brain, GraduationCap, Clock, Timer, Trophy, ChevronRight, ListChecks } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';
import { Link } from 'react-router-dom'

function Bquiz() {
  const [time, setTime] = useState(10);
  const [difficulty, setDifficulty] = useState('medium');
  const [grade, setGrade] = useState('7');
  const [questionCount, setQuestionCount] = useState(4);
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

  const difficulties = [
    { value: 'easy', label: 'آسان', color: 'bg-green-500' },
    { value: 'medium', label: 'متوسط', color: 'bg-yellow-500' },
    { value: 'hard', label: 'سخت', color: 'bg-red-500' }
  ];

  const grades = [
    { value: '7', label: 'هفتم' },
    { value: '8', label: 'هشتم' },
    { value: '9', label: 'نهم' }
  ];

  const handleStartQuiz = () => {
    console.log('شروع آزمون با:', { time, difficulty, grade });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all dark:transition-all" dir="rtl">
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Brain className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 font-['Vazirmatn']">
              شخصی‌سازی آزمون
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-['Vazirmatn']">
              آزمون را متناسب با سطح خود تنظیم کنید
            </p>
          </div>

          {/* Main Settings Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            {/* Grade Selection */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white font-['Vazirmatn'] ml-2">پایه تحصیلی</h2>
                <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {grades.map((gradeOption) => (
                  <label
                    key={gradeOption.value}
                    className={`relative flex flex-col items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${grade === gradeOption.value
                      ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/50'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500'
                      }`}
                  >
                    <input
                      type="radio"
                      name="grade"
                      value={gradeOption.value}
                      checked={grade === gradeOption.value}
                      onChange={(e) => setGrade(e.target.value)}
                      className="absolute opacity-0"
                    />
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-200 font-['Vazirmatn']">
                      پایه {gradeOption.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Time Setting */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white font-['Vazirmatn'] ml-2">زمان آزمون</h2>
                <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-200 min-w-[4rem] font-['Vazirmatn']">
                  {time} دقیقه
                </span>
                <input
                  type="range"
                  min="5"
                  max="15"
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                  className="w-full mx-4 h-2 bg-indigo-200 dark:bg-indigo-900 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-400"
                />
                <Timer className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            {/* Question Count Setting */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white font-['Vazirmatn'] ml-2">تعداد سوالات</h2>
                <ListChecks className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-200 min-w-[4rem] font-['Vazirmatn']">
                  {questionCount} سوال
                </span>
                <input
                  type="range"
                  min="3"
                  max="5"
                  step="1"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full mx-4 h-2 bg-indigo-200 dark:bg-indigo-900 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-400"
                />
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400">
                  <span className="text-sm font-medium">{questionCount}</span>
                </div>
              </div>
            </div>

            {/* Difficulty Setting */}
            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white font-['Vazirmatn'] ml-2">سطح دشواری</h2>
                <Trophy className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {difficulties.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setDifficulty(level.value)}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-200 ${difficulty === level.value
                      ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/50'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500'
                      }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${level.color} mb-2`} />
                    <span className="font-medium text-gray-700 dark:text-gray-200 font-['Vazirmatn']">
                      {level.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Start Button */}
          <Link to="/select">
            <button
              onClick={handleStartQuiz}
              className="w-full bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center group"
            >
              <ChevronRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg mr-2 font-['Vazirmatn']">شروع آزمون</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bquiz;