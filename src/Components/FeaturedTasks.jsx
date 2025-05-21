import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("/api/featured-tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Featured Tasks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div key={task._id} className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className="text-gray-600 mb-1">{task.description}</p>
            <p className="text-sm text-gray-500">Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTasks;
