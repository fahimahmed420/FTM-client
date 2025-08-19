import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskBidders = () => {
  const { id } = useParams(); // task ID from URL
  const [bidders, setBidders] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchBidders = async () => {
      const res = await fetch(`${API_URL}/tasks/${id}/bidders`);
      const data = await res.json();
      setBidders(data);
    };

    fetchBidders();
  }, [id]);

  return (
    <div className='bg-base-300 text-base-content'>
      <div className="w-11/12 min-h-[69vh] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Bidders for This Task</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bidders.map((bid, i) => (
          <div key={i} className="card bg-gradient-to-br from-gray-900 via-gray-800 shadow-sm mr-3">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={bid.photo || 'https://i.pravatar.cc/150?img=3'}
                  alt={bid.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="card-title text-white">{bid.name}</h2>
                  <p className="text-sm text-gray-500">{bid.email}</p>
                </div>
              </div>
              <p className="mb-2 text-white">{bid.message}</p>
              <p className="text-sm font-semibold text-blue-600">Bid Amount: ${bid.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TaskBidders;
