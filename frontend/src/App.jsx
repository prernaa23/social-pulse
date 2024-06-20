import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Profile from "./pages/profile/index";
import Post from "./components/post";
import Update from "./pages/profile/update";
import Home from "./pages/home";

function App() {
  const Layout = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/profile/:userId",
          children: [
            {
              path: "",
              element: <Profile />,
            },
            {
              path: "update",
              element: <Update />,
            },
          ],
        },
        {
          path: "/post",
          element: <Post />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
