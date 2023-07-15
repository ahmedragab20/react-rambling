import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AppContext } from "./contexts/AppContext";
function App() {
  return (
    <div className="dark:bg-stone-900 dark:text-stone-100 pb-14">
      <div className="flex justify-center items-center flex-col gap-1">
        <h1 className="text-3xl font-bold text-center pt-4">Whatta News</h1>
      </div>
      <AppContext>
        <main>
          <Outlet />
        </main>
        <Navigation />
      </AppContext>
    </div>
  );
}

export default App;
