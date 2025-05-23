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
    <div className="max-w-xl mx-auto p-6 shadow rounded bg-white dark:bg-gray-900 dark:text-white mt-10">
      <h2 className="text-2xl font-bold mb-4">Update Task</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input name="title" defaultValue={task.title} className="w-full p-2 border rounded" />
        <select name="category" defaultValue={task.category} className="w-full p-2 border rounded">
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>
        <textarea name="description" defaultValue={task.description} className="w-full p-2 border rounded" />
        <input name="budget" type="number" defaultValue={task.budget} className="w-full p-2 border rounded" />
        <input name="deadline" type="date" defaultValue={task.deadline?.slice(0, 10)} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default UpdateTask;
