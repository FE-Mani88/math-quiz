import React, { useState } from 'react'
import { quizzes } from '../../data/quizzes'
import { GraduationCap, } from 'lucide-react'
import QuizCard from '../../components/QuizCard/QuizCard';
import { quizStorage } from '../../utils/quizStorage';
import { constants } from '../../utils/constants'

export default function Select() {

  const [selectedGrade, setSelectedGrade] = useState(null);

  const filteredQuizzes = selectedGrade
    ? quizzes.filter(quiz => quiz.grade === selectedGrade)
    : quizzes;

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#1a2331] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl gap-1 font-bold text-gray-900 mb-4 flex items-center justify-center dark:text-white">
              پلتفرم آزمون های ریاضی
              <GraduationCap className="w-10 h-10 mr-3 dark:text-white" />
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              پایه تحصیلی خود را انتخاب کنید و آزمون مورد نظر خود را انتخاب کنید
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {[7, 8, 9].map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(selectedGrade === grade ? null : grade)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${selectedGrade === grade
                  ? '!bg-blue-600 text-white hover:bg-sky-500 hover:text-white'
                  : 'bg-white text-gray-700 hover:bg-sky-500 hover:text-white'
                  }`}
              >
                پایه  {grade === 9 ? 'نهم' : grade === 8 ? 'هشتم' : 'هفتم'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredQuizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                id={quiz.id}
                title={quiz.title}
                description={quiz.description}
                difficulty={quiz.difficulty}
                duration={quiz.duration}
                totalQuestions={quiz.totalQuestions}
                image={quiz.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
