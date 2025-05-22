import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthContext';

const AddTask = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [deadline, setDeadline] = useState(new Date());

    const onSubmit = async (data) => {
        const taskData = {
            ...data,
            deadline,
            email: user?.email,
            name: user?.displayName,
        };

        try {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(taskData),
            });

            if (res.ok) {
                toast.success('Task added successfully!');
                reset();
                setDeadline(new Date());
            } else {
                toast.error('Failed to add task.');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred.');
        }
    };

    return (
        <div className="max-w-xl w-11/12 mx-auto mt-10 p-6 shadow-lg rounded-xl bg-white dark:bg-gray-900 dark:text-white mb-10">
            <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    type="text"
                    {...register('title', { required: true })}
                    placeholder="Task Title"
                    className="w-full p-3 border rounded bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700"
                />

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

                <textarea
                    {...register('description', { required: true })}
                    placeholder="What needs to be done?"
                    className="w-full p-3 border rounded bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700"
                />

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

                <input
                    type="number"
                    {...register('budget', { required: true })}
                    placeholder="Budget ($)"
                    className="w-full p-3 border rounded bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700"
                />

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
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTask;
