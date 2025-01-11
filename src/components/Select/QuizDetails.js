import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, BookOpen, BarChart, ArrowLeft, GraduationCap, List } from 'lucide-react';
// import { quizzes } from '../data/quizzes';
import { quizzes } from './data/quizzes';
// import { DIFFICULTY_COLORS } from '../utils/constants';
import { DIFFICULTY_COLORS } from './utils/constants';
import { ActiveQuiz } from './ActiveQuiz';
import ThemeToggle from '../ThemeToggle';


export function QuizDetails() {
  const { id } = useParams();
  const quiz = quizzes.find(q => q.id === id);
  const [isStarted, setIsStarted] = useState(false);
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

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  if (isStarted) {
    return <ActiveQuiz quiz={quiz} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-[#1b2433] transition-all">
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <div className="max-w-4xl mx-auto">
        <Link to="/select" className="inline-flex gap-2 items-center dark:text-gray-300 text-gray-600 hover:text-gray-900 mb-8 hover:translate-x-[-8px] transition-all">
          <ArrowLeft className="w-5 h-5 mr-2" />
          بازگشت به آزمون ها
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 overflow-hidden">
            <img
              src={quiz.image}
              alt={quiz.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 dark:bg-[#293546]">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{quiz.title}</h1>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${DIFFICULTY_COLORS[quiz.difficulty]}`}>
                {quiz.difficulty}
              </span>
            </div>

            <p className="text-gray-600 text-lg mb-8 dark:text-gray-300">{quiz.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center gap-2 space-x-3 text-gray-700">
                <Clock className="w-6 h-6 dark:text-white" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-white">مدت زمان</p>
                  <p className="font-medium dark:text-white">{quiz.duration} دقیقه</p>
                </div>
              </div>

              <div className="flex items-center gap-2 space-x-3 text-gray-700">
                <BookOpen className="w-6 h-6 dark:text-white" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-white">تعداد سوالات</p>
                  <p className="font-medium dark:text-white">{quiz.totalQuestions} سوال</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-700 gap-2">
                <GraduationCap className="w-6 h-6 dark:text-white" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-white"> پایه تحصیلی</p>
                  <p className="font-medium dark:text-white">{quiz.grade === 7 ? "هفتم" : quiz.grade === 8 ? "هشتم" : "نهم"}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 space-x-3 text-gray-700">
                <BarChart className="w-6 h-6 dark:text-white" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-white">سطح آزمون</p>
                  <p className="font-medium capitalize dark:text-white">{quiz.difficulty === 'easy' ? 'آسان': quiz.difficulty === 'medium' ? 'متوسط': 'سخت'}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4 flex items-center gap-2">
                <List className="w-5 h-5 mr-2" />
                Topics Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {quiz.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 dark:text-white bg-gray-100 dark:bg-gray-900 text-gray-700 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsStarted(true)}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}