import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
  {/* Left Content */}
  <div>
    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
      Thrive in the <span className="text-orange-600">World of Freelance</span><br />
      Excellence Marketplace!
    </h1>
    <p className="text-gray-600 mb-8">
      Flourish in a thriving freelance ecosystem dedicated to excellence and limitless opportunities.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <button className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition">
        Find a Better Job
      </button>
      <button className="bg-gray-100 px-6 py-3 rounded-md font-semibold text-gray-700 hover:bg-gray-200 transition flex items-center gap-2">
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
        <span className="bg-gray-100 text-sm px-4 py-1 rounded-full">Digital Marketing</span>
        <span className="bg-gray-100 text-sm px-4 py-1 rounded-full">Graphics & Design</span>
        <span className="bg-gray-100 text-sm px-4 py-1 rounded-full">Programming & Tech</span>
      </div>
    </div>
  </div>

  {/* Right Content - Image */}
  <div className="flex justify-center lg:justify-end">
    <img src="/images/dashboard-laptop.png" alt="Dashboard Preview" className="w-full max-w-md lg:max-w-full" />
  </div>
</section>

        </div>
    );
};

export default Hero;