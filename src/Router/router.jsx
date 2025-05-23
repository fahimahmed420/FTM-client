import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import Home from "../Components/Home";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../Pages/AddTask";
import BrowseTasks from "../Pages/BrowseTasks";
import Register from "../Pages/Register";
import TaskDetails from "../Pages/TaskDetails";
import MyTasks from "../Pages/MyTasks";
import UpdateTask from "../Pages/UpdateTask";
import MyBidsPage from "../Pages/MyBidsPage";
import ProfileSettings from "../Pages/ProfileSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        hydrateFallbackElement: (
          <div className="flex justify-center items-center my-28">
            <span className="loading loading-bars loading-xl"></span>
            <span className="loading loading-ring loading-xl"></span>
            <span className="loading loading-dots loading-xl"></span>
            <span className="loading loading-ring loading-xl"></span>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        )
      },
      {
        path: "/add-task",
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><ProfileSettings></ProfileSettings></PrivateRoute>
      },
      {
        path: "/browse-tasks",
        element: <BrowseTasks></BrowseTasks>
      },
      {
        path: "task/:id",
        element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>
      },
      {
        path: "/my-posted-tasks",
        element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>
      },
      {
        path: "/update-task/:id",
        element: <PrivateRoute><UpdateTask /></PrivateRoute>
      },
      {
        path:"/task/:id/bids",
        element:<PrivateRoute><MyBidsPage></MyBidsPage></PrivateRoute>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/registation",
    element: <Register></Register>
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
