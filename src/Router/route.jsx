import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Career from "./../pages/Career/Career";
import About from "./../pages/About/About";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NewsDetails from "../pages/Home/NewsDetails";
import PrivateRoute from "../routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
