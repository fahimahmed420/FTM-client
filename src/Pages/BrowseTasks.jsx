import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/addTask')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Browse Tasks</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="border rounded-lg p-5 shadow-md bg-white dark:bg-gray-900 dark:text-white"
          >
            <h3 className="text-xl font-semibold mb-1">{task.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {task.category}
            </p>
            <p className="mb-2">{task.description.slice(0, 100)}...</p>

            <div className="text-sm mb-2">
              <p><strong>Budget:</strong> ${task.budget}</p>
              <p><strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}</p>
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

            <Link
              to={`/task/${task._id}`}
              className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
