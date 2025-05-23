import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const NeedSomething = () => {
  return (
    <div>
      <section className="py-12 px-4 max-w-7xl w-11/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Need something&nbsp;
          <span className="text-blue-500">
            <Typewriter
              words={['done?', 'built?', 'designed?', 'solved?']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <p className="text-gray-500 mb-10">Most viewed and all-time top-selling services</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 text-white">
            <img src="/public/assets/undraw_post_gs8w.svg" alt="Post a job" className="mx-auto mb-4 h-32" />
            <h3 className="text-xl font-semibold mb-2">Post a job</h3>
            <p className="text-gray-500">Post jobs that you need completed</p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 text-white">
            <img src="/public/assets/undraw_global-team_8jok.svg" alt="Choose freelancers" className="mx-auto mb-4 h-32" />
            <h3 className="text-xl font-semibold mb-2">Choose freelancers</h3>
            <p className="text-gray-500">Choose freelancers from anywhere of the world</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 text-white">
            <img src="/public/assets/undraw_pay-with-credit-card_77g6.svg" alt="Pay safely" className="mx-auto mb-4 h-32" />
            <h3 className="text-xl font-semibold mb-2">Pay safely</h3>
            <p className="text-gray-500">Highst security for payments</p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 text-white">
            <img src="/public/assets/undraw_professor_d7zn.svg" alt="We're here to help" className="mx-auto mb-4 h-32" />
            <h3 className="text-xl font-semibold mb-2">We're here to help</h3>
            <p className="text-gray-500">All of us are here to help you 24 hours</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NeedSomething;
