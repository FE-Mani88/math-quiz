import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { quizzes } from './data/quizzes';
import './App.css';


function App() {
  //routes
  const router = useRoutes(routes)
  //routes

  return (
    <>
      {router}
    </>
  );
}

export default App;
