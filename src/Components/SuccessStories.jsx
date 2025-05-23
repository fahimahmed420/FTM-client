import React from 'react';

const SuccessStories = () => {
    return (
        <div>
            <section className=" py-12">
  <div className="max-w-6xl mx-auto text-center mb-8">
    <h2 className="text-3xl font-bold">What Our Users Say</h2>
    <p className="text-gray-600 dark:text-gray-400 mt-2">Real stories from real people</p>
  </div>
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    {[1, 2, 3].map(i => (
      <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <div className="flex items-center gap-4 mb-4">
          <img src={`https://i.pravatar.cc/150?img=${i}`} className="w-12 h-12 rounded-full" alt="" />
          <div>
            <h4 className="font-semibold">Jane Doe</h4>
            <p className="text-sm text-gray-500">Freelancer</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300">“This platform helped me land consistent projects. Easy to use and professional!”</p>
      </div>
    ))}
  </div>
</section>

        </div>
    );
};

export default SuccessStories;