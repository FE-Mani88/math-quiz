import React, { useState, useEffect } from 'react';
import { Moon, Sun, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom'
// Quiz Data
const questions = [
    {
        id: 'q1',
        text: 'اگر دو سیب باشد 2 تا متن تستی جهت نمایش؟',
        options: [
            { id: 'a', text: '1' },
            { id: 'b', text: '4' },
            { id: 'c', text: '8' },
            { id: 'd', text: '12' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'q2',
        text: 'کدام گزینه عددی درست تر است از متن ریاضی؟',
        options: [
            { id: 'a', text: '3' },
            { id: 'b', text: '91' },
            { id: 'c', text: '2 + 21' },
            { id: 'd', text: '18%' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 'q3',
        text: 'کدام گزینه پاسخ مجموعه رادیکالی 2 است؟',
        options: [
            { id: 'a', text: 'رادیکال 8' },
            { id: 'b', text: '4 * 3' },
            { id: 'c', text: '!87' },
            { id: 'd', text: '20%' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'q4',
        text: 'کدام گزینه عددی درست تر است از متن ریاضی؟',
        options: [
            { id: 'a', text: '12' },
            { id: 'b', text: '1645' },
            { id: 'c', text: '!8' },
            { id: 'd', text: '7 * 8' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'q5',
        text: 'کدام گزینه عددی تستی تر از متن درست تر است از متن تستی',
        options: [
            { id: 'a', text: 'تهی' },
            { id: 'b', text: '10 عضوی' },
            { id: 'c', text: '20 عضوی' },
            { id: 'd', text: 'خالی' }
        ],
        correctAnswer: 'c'
    }
];

// Custom Hook for Dark Mode
function useDarkMode() {
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

    const toggleTheme = () => setIsDark(prev => !prev);

    return { isDark, toggleTheme };
}

// Theme Toggle Component
function ThemeToggle() {
    const { isDark, toggleTheme } = useDarkMode();
    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
                <Moon className="w-6 h-6 text-gray-600" />
            )}
        </button>
    );
}

// Quiz Progress Component
function QuizProgress({ currentQuestion, totalQuestions }) {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const targetProgress = ((currentQuestion) / totalQuestions) * 100;

    useEffect(() => {
        setAnimatedProgress(0);
        const timer = setTimeout(() => {
            setAnimatedProgress(targetProgress);
        }, 100);
        return () => clearTimeout(timer);
    }, [currentQuestion, totalQuestions]);

    return (
        <div className="w-full max-w-2xl mb-6 transition-all">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                <span>Question {currentQuestion + 1} of {totalQuestions}</span>
                <span>{Math.round(animatedProgress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${animatedProgress}%` }}
                ></div>
            </div>
        </div>
    );
}

// Question Card Component
function QuestionCard({ question, selectedAnswer, onSelectAnswer }) {
    return (
        <div className="bg-white transition-all dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{question.text}</h2>
            <div className="space-y-3">
                {question.options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onSelectAnswer(option.id)}
                        className={`w-full p-4 text-left rounded-lg transition-colors ${selectedAnswer === option.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white'
                            }`}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
}

// Quiz Results Component
function QuizResults({ score, totalQuestions, onRetry }) {
    const percentage = (score / totalQuestions) * 100;

    return (
        <div className="bg-white transition-all dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-lg mb-4">
                You scored <span className="font-bold text-blue-500">{score}</span> out of{' '}
                <span className="font-bold">{totalQuestions}</span>
            </p>
            <div className="mb-6">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
                    <div
                        className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{Math.round(percentage)}%</p>
            </div>
            <button
                onClick={onRetry}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Try Again
            </button>
        </div>
    );
}

// Main App Component
function Quiz() {
    const initialState = {
        currentQuestionIndex: 0,
        answers: {},
        score: 0,
        isComplete: false,
    };

    const [quizState, setQuizState] = useState(initialState);

    const handleAnswer = (answerId) => {
        setQuizState((prev) => {
            const newAnswers = {
                ...prev.answers,
                [questions[prev.currentQuestionIndex].id]: answerId,
            };

            if (prev.currentQuestionIndex === questions.length - 1) {
                const score = questions.reduce((acc, question) => {
                    return acc + (newAnswers[question.id] === question.correctAnswer ? 1 : 0);
                }, 0);

                return {
                    ...prev,
                    answers: newAnswers,
                    isComplete: true,
                    score,
                };
            }

            return {
                ...prev,
                answers: newAnswers,
                currentQuestionIndex: prev.currentQuestionIndex + 1,
            };
        });
    };

    const handleRetry = () => {
        setQuizState(initialState);
    };

    if (quizState.isComplete) {

        return (
            <div className="transition-all min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
                <ThemeToggle />
                <QuizResults
                    score={quizState.score}
                    totalQuestions={questions.length}
                    onRetry={handleRetry}
                />
            </div>
        );


    }

    const currentQuestion = questions[quizState.currentQuestionIndex];

    return (
        <div className="min-h-screen transition-all bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
            <ThemeToggle />
            <QuizProgress
                currentQuestion={quizState.currentQuestionIndex}
                totalQuestions={questions.length}
            />
            <QuestionCard
                question={currentQuestion}
                selectedAnswer={quizState.answers[currentQuestion.id]}
                onSelectAnswer={handleAnswer}
            />
        </div>
    );
}

export default Quiz;