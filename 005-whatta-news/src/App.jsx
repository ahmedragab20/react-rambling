import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation";
// language topbar

function App() {
  return (
    <div className="dark:bg-stone-900 dark:text-stone-100 pb-14">
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
