import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/addTask`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='bg-base-300 text-base-content'>
      <div className="w-11/12 min-h-[69vh] mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Browse Tasks</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="border border-gray-600 rounded-lg p-5 shadow-md bg-white dark:bg-[#111] dark:text-white flex flex-col justify-between"
          >
            <div>
              <div className='flex justify-between mb-4 items-center'>
                <h3 className="text-xl font-semibold mb-1">{task.title}</h3>
            <span className="text-xs bg-blue-500 px-2 py-1 rounded-full ">
                {task.category}
              </span>
              </div>
            <p className="mb-4">{task.description.slice(0, 100)}...</p>

            <div className="text-sm mb-2">
              <p><strong className='text-green-500'>Budget:</strong> ${task.budget}</p>
              <p><strong className='text-red-500'>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}</p>
              <p><strong>Posted By:</strong> {task.name} ({task.email})</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {(task.tags || []).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            </div>

            <Link to={`/task/${task._id}`} 
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-center">
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BrowseTasks;
