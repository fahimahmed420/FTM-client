import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = () => {
    fetch(`http://localhost:3000/mytasks?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        toast.error('Failed to load tasks.');
        setLoading(false);
      });
  };

  useEffect(() => {
    if (user?.email) {
      fetchTasks();
    }
  }, [user]);

  const handleDelete = async (id, title) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger mr-4"
      },
      buttonsStyling: false
    });

    const result = await swalWithBootstrapButtons.fire({
      title: `Delete "${title}"?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      backdrop: true,
      allowOutsideClick: false,
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/task/${id}`, {
          method: 'DELETE'
        });

        if (res.ok) {
          await swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your task has been deleted.",
            "success"
          );
          fetchTasks();
        } else {
          throw new Error('Failed to delete');
        }
      } catch (err) {
        console.error(err);
        swalWithBootstrapButtons.fire(
          "Error!",
          "Something went wrong. Task was not deleted.",
          "error"
        );
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire(
        "Cancelled",
        "Your task is safe 🙂",
        "error"
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 min-h-[69vh] mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Posted Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="px-4 py-2 border dark:border-gray-700">Title</th>
                <th className="px-4 py-2 border dark:border-gray-700">Category</th>
                <th className="px-4 py-2 border dark:border-gray-700">Budget</th>
                <th className="px-4 py-2 border dark:border-gray-700">Deadline</th>
                <th className="px-4 py-2 border dark:border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task._id} className="border-t dark:border-gray-700">
                  <td className="px-4 py-2">{task.title}</td>
                  <td className="px-4 py-2">{task.category}</td>
                  <td className="px-4 py-2">${task.budget}</td>
                  <td className="px-4 py-2">{new Date(task.deadline).toLocaleDateString()}</td>
                  <td className="px-4 py-2 space-x-2">
                    <Link
                      to={`/update-task/${task._id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(task._id, task.title)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/task/${task._id}/bids`}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Bids
                    </Link>
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
