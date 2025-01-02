import React from 'react';

export function QuizQuestion({ question, selectedAnswer, onAnswerSelect }) {
  return (
    <div className="bg-white dark:bg-[#222c40] p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-medium mb-4 dark:text-white">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(option)}
            className={`w-full p-4 text-left rounded-lg transition-colors ${
              selectedAnswer === option
                ? 'bg-blue-100 border-2 border-blue-500 dark:bg-[#293546] text-white'
                : 'bg-gray-50 hover:bg-gray-100 dark:bg-[#3e4a5c] text-white'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}