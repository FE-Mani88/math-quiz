import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, BookOpen, BarChart, ArrowLeft, GraduationCap, List } from 'lucide-react';
// import { quizzes } from '../data/quizzes';
import { quizzes } from './data/quizzes';
// import { DIFFICULTY_COLORS } from '../utils/constants';
import { DIFFICULTY_COLORS } from './utils/constants';
import { ActiveQuiz } from './ActiveQuiz';

export function QuizDetails() {
  const { id } = useParams();
  const quiz = quizzes.find(q => q.id === id);
  const [isStarted, setIsStarted] = useState(false);

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Quizzes
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 overflow-hidden">
            <img
              src={quiz.image}
              alt={quiz.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{quiz.title}</h1>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${DIFFICULTY_COLORS[quiz.difficulty]}`}>
                {quiz.difficulty}
              </span>
            </div>

            <p className="text-gray-600 text-lg mb-8">{quiz.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{quiz.duration} minutes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-700">
                <BookOpen className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-500">Questions</p>
                  <p className="font-medium">{quiz.totalQuestions} total</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-700">
                <GraduationCap className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-500">Grade</p>
                  <p className="font-medium">{quiz.grade}th Grade</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-700">
                <BarChart className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-500">Difficulty</p>
                  <p className="font-medium capitalize">{quiz.difficulty}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <List className="w-5 h-5 mr-2" />
                Topics Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {quiz.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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