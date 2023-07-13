import { useEffect } from "react";
import { FaHouse } from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/auth", { replace: true });
    }
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-slate-700 dark:text-slate-100">
      <main>
        <Outlet />
      </main>

      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white dark:bg-gray-700">
        <div className="grid h-full max-w-lg grid-cols-1 mx-auto font-medium">
          <NavLink
            to="/"
            className="nav-link inline-flex hover:text-slate-300 dark:hover:text-gray-400 relative flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <div className="absolute z-10 inset-0 flex justify-center items-center flex-col gap-2">
              <FaHouse className="text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Home
              </span>
            </div>

            <div className="absolute inset-0 z-0"></div>
          </NavLink>
          {/* <NavLink
            to="/settings"
            className="nav-link inline-flex relative flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <div className="absolute z-10 inset-0 flex justify-center items-center flex-col gap-2">
              <FaRegSnowflake className="text-slate-300" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Settings
              </span>
            </div>

            <div className="absolute inset-0z-0"></div>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
}
