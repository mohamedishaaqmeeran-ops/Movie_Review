import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from './Pages/Register';
import Login from "./Pages/Login";
import Home_Wrapper from "./Wrappers/Home_Wrapper";
import Movies from "./Pages/Movies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Wrappers/Dashboard";
import Welcome from "./Pages/Welcome";
import Movieform from "./Components/Movieform";
import Reviewform from "./Components/Reviewform";
import Reviewlist from "./Pages/Reviewlist";
import Home from "./Pages/Home";
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home_Wrapper />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <Welcome />

        },
        {
          path: "Movies",
          element: <Movies />,
          children: [
            {
              path: ":id",
              element: <Movieform />,
            },
            {
              path: ":id/review",
              element: <Reviewform />
            },
            {
              path: ":id/reviews",
              element: <Reviewlist />
            }
          ]
        }]
    },
  ]);

  return (
    <div className="bg-pink-100 min-h-screen">
      <ToastContainer
        hideProgressBar={true}
        autoClose={2500}
      />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;