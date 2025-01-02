import React, { useState, useEffect } from 'react';
// import { questions } from '../data/questions';
import { questions } from './data/questions';
import { QuizProgress } from './QuizProgress';
// import { QuizQuestion } from './QuizQuestion';
import { QuizQuestion } from './QuizQuestions';
// import { QuizResults } from './QuizResults';
import { QuizResults } from './QuizResult';

export function ActiveQuiz({ quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60);
  const [isFinished, setIsFinished] = useState(false);
  
  const quizQuestions = questions[quiz.id] || [];
  
  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isFinished) {
      finishQuiz();
    }
  }, [timeLeft, isFinished]);

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return answer === quizQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(quiz.duration * 60);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <QuizResults
        score={calculateScore()}
        totalQuestions={quizQuestions.length}
        answers={answers}
        questions={quizQuestions}
        quizTitle={quiz.title}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 dark:bg-[#121a29] transition-all">
      <div className="max-w-3xl mx-auto">
        <QuizProgress
          currentQuestion={currentQuestion + 1}
          totalQuestions={quizQuestions.length}
          timeLeft={timeLeft}
        />
        
        <QuizQuestion
          question={quizQuestions[currentQuestion]}
          selectedAnswer={answers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
        />
      </div>
    </div>
  );
}