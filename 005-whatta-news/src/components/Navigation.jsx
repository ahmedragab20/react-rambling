import { FaHouse, FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export function Navigation() {
  const { userCountry } = useAppContext();
  return (
    <div className="fixed z-50 h-12 max-w-full shadow-xl sm:max-w-sm -translate-x-1/2 rounded-full bottom-4 left-1/2 dark:border dark:border-stone-800 backdrop-blur-xl">
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
          aria-label="Home"
          className="nav-link w-9 h-9 text-stone-500 flex justify-center items-center rounded-full"
        >
          <FaHouse className="text-xl" />
        </NavLink>
        <NavLink
          to="/search"
          aria-label="Search"
          className="nav-link w-9 h-9 text-stone-500 flex justify-center items-center rounded-full"
        >
          <FaMagnifyingGlass className="text-xl" />
        </NavLink>
        <div className="w-9 h-9 hover:scale-110 duration-150 cursor-pointer text-stone-500 flex justify-center items-center rounded-full">
          {userCountry?.flags ? (
            <img
              tabIndex="0"
              src={userCountry.flags.svg}
              alt={userCountry.flags.alt}
              className="w-7 h-7 rounded-full"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-stone-500">...</div>
          )}
        </div>
      </div>
    </div>
  );
}
