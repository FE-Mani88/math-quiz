import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, XCircle, CheckCircle, RotateCcw } from 'lucide-react';

export function QuizResults({ score, totalQuestions, answers, questions, quizTitle, onRetry }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
              <Trophy className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{quizTitle} - Results</h1>
            <p className="text-2xl font-semibold text-blue-600">
              Your Score: {score}/{totalQuestions} ({percentage}%)
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {questions.map((question, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  {answers[index] === question.correctAnswer ? (
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900 mb-2">{question.question}</p>
                    <p className="text-sm text-gray-600">Your answer: {answers[index]}</p>
                    {answers[index] !== question.correctAnswer && (
                      <p className="text-sm text-green-600">Correct answer: {question.correctAnswer}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={onRetry}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </button>
            <Link
              to="/"
              className="flex-1 flex items-center justify-center bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Back to Quizzes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}