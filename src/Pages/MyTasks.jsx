import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  // Fetch user's tasks only
  useEffect(() => {
    if (user?.email) {
      fetch(`/api/tasks?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setTasks(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  // Delete handler
  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this task?');
    if (!confirm) return;

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        toast.success('Task deleted successfully!');
        setTasks(tasks.filter((task) => task._id !== id));
      } else {
        toast.error('Failed to delete task.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">My Posted Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks posted yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 border dark:border-gray-700">Title</th>
                <th className="px-4 py-2 border dark:border-gray-700">Category</th>
                <th className="px-4 py-2 border dark:border-gray-700">Budget</th>
                <th className="px-4 py-2 border dark:border-gray-700">Deadline</th>
                <th className="px-4 py-2 border dark:border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id} className="text-center">
                  <td className="px-4 py-2 border dark:border-gray-700">{task.title}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{task.category}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">${task.budget}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    {new Date(task.deadline).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700 space-x-2">
                    <button
                      onClick={() => navigate(`/update-task/${task._id}`)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => navigate(`/task-bids/${task._id}`)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Bids
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTasks;
