import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import App from "../App";
import GuestLayout from "../layouts/guest";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <GuestLayout />,

    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
    ]
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
