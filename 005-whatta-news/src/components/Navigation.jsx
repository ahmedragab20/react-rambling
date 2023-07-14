import { FaHouse, FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export function Navigation() {
  return (
    <div className="fixed z-50 h-12 max-w-full shadow-xl sm:max-w-sm -translate-x-1/2 rounded-full bottom-4 left-1/2 dark:border dark:border-stone-800 backdrop-blur-md">
      {/* TODO:
        1- Home
        2- Search
          -- tags
          -- categories
          -- countries
      */}
      <div className="flex justify-between gap-3 items-center h-full w-full p-2">
        <NavLink
          to="/"
          className="nav-link w-9 h-9 text-stone-500 flex justify-center items-center rounded-full"
        >
          <FaHouse className="text-xl" />
        </NavLink>
        <NavLink
          to="/search"
          className="nav-link w-9 h-9 text-stone-500 flex justify-center items-center rounded-full"
        >
          <FaMagnifyingGlass className="text-xl" />
        </NavLink>
      </div>
    </div>
  );
}
