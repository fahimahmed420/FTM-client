import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../context/AuthContext";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [deadline, setDeadline] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const taskData = {
      ...data,
      deadline,
      email: user?.email,
      name: user?.displayName,
      userImage: user?.photoURL,
      createdAt: new Date().toISOString(), // Add createdAt timestamp
    };

    setLoading(true);
    try {
      const res = await fetch('https://assignment-10-server-pi-mocha.vercel.app/addTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (res.ok) {
        toast.success('Task added successfully!');
        reset({
          title: '',
          category: '',
          description: '',
          budget: '',
        });
        setDeadline(new Date());
      } else {
        toast.error('Failed to add task.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-base-300 text-base-content py-10'>
      <div className="max-w-xl mx-auto p-6 shadow-lg rounded-xl bg-white dark:bg-[#111] dark:text-white ">
        <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              {...register('title', { required: true })}
              placeholder="Task Title"
              className="w-full p-3 border rounded bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
          </div>

          <div>
            <select
              {...register('category', { required: true })}
              className="w-full p-3 border rounded bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700"
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Design">Design</option>
              <option value="Writing">Writing</option>
              <option value="Marketing">Marketing</option>
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">Category is required</p>}
          </div>

          <div>
            <textarea
              {...register('description', { required: true })}
              placeholder="What needs to be done?"
              className="w-full p-3 border rounded bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Deadline</label>
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              className="w-full p-3 border rounded bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700"
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
            />
          </div>

          <div>
            <input
              type="number"
              min="1"
              step="0.01"
              {...register('budget', { required: true, min: 1 })}
              placeholder="Budget ($)"
              className="w-full p-3 border rounded bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700"
            />
            {errors.budget && <p className="text-red-500 text-sm mt-1">Valid budget is required</p>}
          </div>

          <input
            type="email"
            value={user?.email || ''}
            readOnly
            className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
          />

          <input
            type="text"
            value={user?.displayName || ''}
            readOnly
            className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? 'Adding...' : 'Add Task'}
          </button>
        </form>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default AddTask;
