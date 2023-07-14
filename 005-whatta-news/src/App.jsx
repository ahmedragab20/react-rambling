import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="dark:bg-stone-900 dark:text-stone-100">
      <Outlet />
    </div>
  );
}

export default App;
