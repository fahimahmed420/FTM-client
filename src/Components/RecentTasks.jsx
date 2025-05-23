import React, { useEffect, useState } from 'react';

const RecentTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('http://localhost:3000/recent-tasks');
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();

    const interval = setInterval(fetchTasks, 60000);
    return () => clearInterval(interval);
  }, []);

  const calculateProgress = (createdAt, deadline) => {
    const now = new Date();
    const start = new Date(createdAt);
    const end = new Date(deadline);
    const totalDuration = end - start;
    const elapsed = now - start;
    const percentUsed = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
    return Math.floor(percentUsed);
  };

  const getProgressColor = (percentUsed) => {
    if (percentUsed < 33) return 'bg-green-400';
    if (percentUsed < 66) return 'bg-yellow-400';
    return 'bg-red-500';
  };

  const timeLeft = (deadline) => {
    const diff = new Date(deadline) - new Date();
    const hours = Math.max(0, Math.floor(diff / (1000 * 60 * 60)));
    const minutes = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
    return { label: `${hours}h ${minutes}m left`, remainingMs: diff };
  };

  return (
    <div className='w-11/12 mx-auto my-10'>
        <h2 className='text-center font-bold text-3xl md:text-4xl mb-2'>Urgent Tasks</h2>
    <p className='text-gray-500 mb-6 text-center'>Featuring Urgent tasks that have low deadline</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tasks.map((task) => {
        const progress = calculateProgress(task.createdAt, task.deadline);
        const colorClass = getProgressColor(progress);
        const { label, remainingMs } = timeLeft(task.deadline);

        if (remainingMs <= 0) return null;

        return (
          <div
            key={task._id}
            className="bg-gray-900 text-white p-4 rounded-xl shadow-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">{task.title}</h3>
              <span className="text-xs bg-blue-500 px-2 py-1 rounded-full">
                {task.category}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <img
                src={task.userImage || 'https://i.pravatar.cc/40'}
                alt="user"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm opacity-75">{task.name}</span>
            </div>

            <div className="text-xs text-gray-400 mb-2">{label}</div>
            <div className="text-sm mb-2">Budget: ${task.budget}</div>

            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div
                className={`${colorClass} h-2 rounded-full`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="text-xs text-right text-gray-400">
              {100 - progress}% time left
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default RecentTasks;
