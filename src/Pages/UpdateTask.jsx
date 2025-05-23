import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/task/${id}`)
      .then(res => res.json())
      .then(data => {
        setTask(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        toast.error('Failed to fetch task.');
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTask = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      budget: Number(form.budget.value),
      deadline: form.deadline.value,
    };

    try {
      const res = await fetch(`http://localhost:3000/task/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      if (res.ok) {
        toast.success('Task updated!');
        navigate('/my-posted-tasks');
      } else {
        toast.error('Failed to update task');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error updating task');
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
   <div className='bg-base-300 text-base-content py-10'>
     <div className="max-w-xl w-11/12 min-h-[65vh] mx-auto p-6 shadow rounded-xl bg-white dark:bg-gray-900 dark:text-white py-15">
      <h2 className="text-3xl font-bold mb-10 text-center">Update Task</h2>
      <form onSubmit={handleUpdate} className="space-y-5">

        <input
          name="title"
          defaultValue={task.title}
          placeholder="Task Title"
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <select
          name="category"
          defaultValue={task.category}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>

        <textarea
          name="description"
          defaultValue={task.description}
          placeholder="Task Description"
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input
          name="budget"
          type="number"
          defaultValue={task.budget}
          placeholder="Budget"
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input
          name="deadline"
          type="date"
          defaultValue={task.deadline?.slice(0, 10)}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-colors duration-300">
            Update Task
          </button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default UpdateTask;
