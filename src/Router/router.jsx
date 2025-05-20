import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Registation from "../Pages/Registation";
import HomePage from "../Pages/HomePage";
import Home from "../Components/Home";

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
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/registation",
    element: <Registation></Registation>
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>
  },
]);

export default router;
