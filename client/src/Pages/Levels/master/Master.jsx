import React, { useEffect, useState } from 'react';
import Navbar from '../../../CommonComponents/Navbar';
import QuizCard from '../../../Components/QuizCard.jsx'; // Assuming this component is used to render each quiz

const Master = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch the basic.json file
    fetch('/src/Pages/Levels/master/Master.json') // Ensure the correct path to basic.json
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((err) => console.error('Failed to load quizzes:', err));
  }, []);

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 py-10'>
        <div className='text-center text-white mb-10'>
          <h1 className='text-5xl font-extrabold'>🔥 Master Level Quizzes</h1>
          <p className='text-lg mt-4'>Answer the quizzes below and score points!</p>
        </div>

        <div className='flex flex-wrap justify-center gap-10 px-4'>
          {/* Map through the quizzes from basic.json */}
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} /> // Assuming QuizCard component is responsible for rendering each quiz
          ))}
        </div>
      </div>
    </>
  );
};

export default Master;