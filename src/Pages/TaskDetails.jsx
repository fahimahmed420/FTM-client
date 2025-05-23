import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TaskDetails = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [bidsCount, setBidsCount] = useState(0);

    const fetchTask = async () => {
        try {
            const res = await fetch(`http://localhost:3000/addTask/${id}`);
            if (!res.ok) throw new Error('Task not found');
            const data = await res.json();
            setTask(data);
            setBidsCount(data?.bids?.length || 0);
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
        try {
            const newBid = {
                name: "Bidder User", // You can replace with actual logged-in user's name
                email: "bidder@example.com", // Replace with actual email
                amount: 100, // Static for now
                message: "I’m interested in this task."
            };

            const res = await fetch(`http://localhost:3000/addTask/${id}/bid`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBid)
            });

            if (res.ok) {
                setBidsCount(prev => prev + 1);
            }
        } catch (err) {
            console.error(err);
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
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                <div className='flex justify-between'>
                    <h2 className="text-3xl font-bold mb-4">{task.title}</h2>
                    <button onClick={handleBid} className="ml-3 inline-block bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm">
                        Bid Now
                    </button>
                </div>

                <p className="text-lg text-blue-600 font-semibold mb-4">
                    You bid for {bidsCount} {bidsCount === 1 ? 'opportunity' : 'opportunities'}
                </p>

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
                        <p>
                            {task.name} ({task.email}){' '}
                        </p>
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
                    className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                >
                    Back to Browse
                </Link>
            </div>
        </div>
    );
};

export default TaskDetails;
