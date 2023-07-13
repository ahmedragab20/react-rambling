import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
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
