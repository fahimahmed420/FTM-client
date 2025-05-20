import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-cyan-300 via-teal-400 to-blue-500 text-white overflow-hidden relative">
      
      {/* Animated Ripples */}
      <div className="absolute w-[600px] h-[600px] bg-white opacity-10 rounded-full animate-ping delay-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-white opacity-10 rounded-full animate-ping delay-200"></div>
      <div className="absolute w-[200px] h-[200px] bg-white opacity-10 rounded-full animate-ping delay-500"></div>
      
      {/* Error Content */}
      <h1 className="text-7xl font-bold mb-4 z-10">404</h1>
      <p className="text-xl mb-6 z-10">Oops! The page you're looking for doesn't exist.</p>

      <button
        onClick={() => navigate('/')}
        className="z-10 bg-white text-teal-600 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
