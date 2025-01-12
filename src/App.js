import React, { useState } from 'react';
import './App.css'
import './input.css';
import { Routes, Route } from 'react-router-dom'
// import { motion } from 'framer-motion';
/////////////////Components//////////////////
// import {Welcome, Home, Contact, Shop, Info, Error404} from './components';
import Welcome from './components/Welcome/Welcome'
import Home from './components/Home/Home';
import { GraduationCap } from 'lucide-react';
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import Info from './components/Info/Info';
import Error404 from './components/Error404/Error404';
import Wquiz from './components/Wquiz/Wquiz';
import Bquiz from './components/Bquiz/Bquiz';
import { QuizCard } from './components/Select/QuizCard';
import { QuizDetails } from './components/Select/QuizDetails';
// import { quizzes } from './components/Select/ActiveQuiz';
import { quizzes } from './components/Select/data/quizzes';
// import Select from './components/Select/Select';
// import Quiz from './components/Quiz/Quiz';
///////////////////////////////////

function App() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [loaded, setLoaded] = useState(true)

  const filteredQuizzes = selectedGrade
    ? quizzes.filter(quiz => quiz.grade === selectedGrade)
    : quizzes;

  window.onload = () => {
    setLoaded(true)
  }

  return (
    <>
      {loaded ? (<Routes>
        <Route path="/quiz/:id" element={<QuizDetails />} />
        <Route path="/select" element={
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
        } />
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='*' element={<Error404 />}></Route>
        <Route path='/wquiz' element={<Wquiz />}></Route>
        <Route path='/bquiz' element={<Bquiz />}></Route>
        {/* <Route path='/Select' element={<Select/>}></Route> */}
      </Routes>) : (
        <div className='flex items-center justify-center h-[100vh]'>
          <img className='transition-all' src="./images/NewSpin.gif" alt="#" />
        </div>
      )}
    </>
  );
}

export default App;
