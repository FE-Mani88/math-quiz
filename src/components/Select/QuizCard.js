import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, BarChart } from 'lucide-react';
// import { DIFFICULTY_COLORS } from '../utils/constants';
import { DIFFICULTY_COLORS } from './utils/constants';

export function QuizCard({ id, title, description, difficulty, duration, totalQuestions, image }) {
  return (
    <Link to={`/quiz/${id}`} className="block">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
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
      </div>
    </Link>
  );
}