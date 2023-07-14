import { FaHouse } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export function Navigation() {
  return (
    <div className="fixed z-50 h-12 w-3/5 shadow-xl sm:max-w-sm -translate-x-1/2 rounded-full bottom-4 left-1/2 dark:border dark:border-stone-800 backdrop-blur-md">
      {/* TODO:
        1- Home
        2- Search
        3- tags
        5- categories
        6- countries
      */}
      <div className="flex justify-between items-center h-full w-full p-2">
        <NavLink
          to="/"
          className="nav-link w-9 h-9 text-stone-500 flex justify-center items-center rounded-full"
        >
          <FaHouse className="text-xl" />
        </NavLink>
        <NavLink
          to="/f"
          className="nav-link w-9 h-9 text-stone-500 flex justify-center items-center rounded-full"
        >
          <FaHouse className="text-xl" />
        </NavLink>
        <NavLink
          to="/f"
          className="nav-link w-9 h-9 text-stone-500 flex justify-center items-center rounded-full"
        >
          <FaHouse className="text-xl" />
        </NavLink>
        <NavLink
          to="/f"
          className="nav-link w-9 h-9 text-stone-500 flex justify-center items-center rounded-full"
        >
          <FaHouse className="text-xl" />
        </NavLink>
        <NavLink
          to="/f"
          className="nav-link w-9 h-9 text-stone-500 flex justify-center items-center rounded-full"
        >
          <FaHouse className="text-xl" />
        </NavLink>
        <NavLink
          to="/f"
          className="nav-link w-9 h-9 text-stone-500 flex justify-center items-center rounded-full"
        >
          <FaHouse className="text-xl" />
        </NavLink>
      </div>
    </div>
  );
}
