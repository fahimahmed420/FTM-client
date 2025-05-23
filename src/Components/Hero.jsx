import React from 'react';
import { Link } from 'react-router';

const Hero = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 2500, behavior: 'smooth' });
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className='order-1 md:order-2'>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Thrive in the <span className="text-primary">World of Freelance</span><br />
            Excellence Marketplace!
          </h1>

          <p className="text-gray-600 mb-8">
            Flourish in a thriving freelance ecosystem dedicated to excellence and limitless opportunities.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link to={"/browse-tasks"}>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md cursor-pointer font-semibold hover:bg-blue-700 transition">
                Find a Better Job
              </button>
            </Link>
            <button onClick={scrollToTop} className="bg-gray-100 cursor-pointer px-6 py-3 rounded-md font-semibold text-gray-700 hover:bg-gray-200 transition flex items-center gap-2">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Popular Categories */}
          <div>
            <p className="text-gray-500 font-medium mb-2">Popular categories</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-sm px-4 py-1 dark:text-black font-medium rounded-full">Digital Marketing</span>
              <span className="bg-gray-100 text-sm px-4 py-1 dark:text-black font-medium rounded-full">Graphics & Design</span>
              <span className="bg-gray-100 text-sm px-4 py-1 dark:text-black font-medium rounded-full">Programming & Tech</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center lg:justify-end">
          <img src="/public/assets/DrawKit Vector Illustration Project Manager (4).svg" alt="Dashboard Preview" className="w-full max-w-md lg:max-w-full" />
        </div>
      </section>

    </div>
  );
};

export default Hero;