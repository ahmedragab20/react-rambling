import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Search from "../pages/search";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
