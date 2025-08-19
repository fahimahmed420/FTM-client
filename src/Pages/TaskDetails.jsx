import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [bidsCount, setBidsCount] = useState(0);
    const API_URL = import.meta.env.VITE_API_URL;

    const isOwner = task?.email === user?.email;

    const fetchTask = async () => {
        try {
            const res = await fetch(`${API_URL}/addTask/${id}`);
            if (!res.ok) throw new Error('Task not found');
            const data = await res.json();
            setTask(data);

            // Count current user's bids
            const userBids = data?.bids?.filter(bid => bid.email === user?.email) || [];
            setBidsCount(userBids.length);
        } catch (err) {
            console.error(err);
            setError('Failed to load task details.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTask();
    }, [id]);

    const handleBid = async () => {
        if (isOwner) return;

        const newBid = {
            name: user.displayName,
            email: user.email,
            amount: 100,
            message: "I'm interested in this task.",
            photo: user.photoURL
        };

        try {
            const res = await fetch(`${API_URL}/addTask/${id}/bid`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBid)
            });

            if (res.ok) {
                toast.success('Bid placed successfully!');
                setBidsCount(prev => prev + 1);
            } else {
                toast.error('Failed to submit bid');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error placing bid');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (error || !task) {
        return (
            <div className="text-center mt-10 text-red-500 font-medium">
                {error || 'Task not found.'}
            </div>
        );
    }

    return (
        <div className="w-11/12 min-h-[69vh] mx-auto px-4 py-10">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-white">
                <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold mb-4">{task.title}</h2>
                    <div className='flex flex-col '>
                        <button
                            onClick={handleBid}
                            disabled={isOwner}
                            className={` inline-block px-3 py-1 rounded text-sm ${isOwner
                                ? 'bg-gray-400 cursor-not-allowed text-white'
                                : 'bg-orange-500 hover:bg-orange-600 text-white'
                                }`}>
                            Bid Now
                        </button>
                        {isOwner && (
                            <p className="text-sm text-red-500 mt-2">
                                You can't bid on your own task.
                            </p>
                        )}
                        {!isOwner && (
                            <p className="text-lg text-blue-600 font-semibold mb-4">
                    You bid for {bidsCount} {bidsCount === 1 ? 'opportunity' : 'opportunities'}
                </p>
                        )
                        }
                    </div>
                </div>

                

                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100 px-3 py-1 rounded-full text-xs font-semibold">
                        {task.category}
                    </span>
                </div>

                <p className="text-lg mb-6">{task.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="font-semibold">Budget:</p>
                        <p>${task.budget}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Deadline:</p>
                        <p>{new Date(task.deadline).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Posted By:</p>
                        <p>{task.name} ({task.email})</p>
                    </div>
                </div>

                {task.tags?.length > 0 && (
                    <div className="mb-6">
                        <p className="font-semibold mb-2">Tags:</p>
                        <div className="flex flex-wrap gap-2">
                            {task.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <Link
                    to="/browse-tasks"
                    className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                    Back to Browse
                </Link>
            </div>

            <ToastContainer />
        </div>
    );
};

export default TaskDetails;
