import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { UserCountryContext } from "./contexts/UserCountry";
import { useEffect } from "react";
function App() {
  // const UserCountry = UserCountryContext();

  return (
      <div className="dark:bg-stone-900 dark:text-stone-100 pb-14">
        <div className="flex justify-center items-center flex-col gap-1">
          <h1 className="text-3xl font-bold text-center pt-4">Whatta News</h1>
        </div>
        <main>
          <Outlet />
        </main>
        <Navigation />
      </div>
  );
}

export default App;
