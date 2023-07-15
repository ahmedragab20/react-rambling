import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AppContext } from "./contexts/AppContext";
import { Header } from "./components/Header";
function App() {
  return (
    <div className="dark:bg-stone-900 dark:text-stone-100 py-16 min-h-screen">
      <Header />

      <AppContext>
        <main className="px-3">
          <Outlet />
        </main>

        <Navigation />
      </AppContext>
    </div>
  );
}

export default App;
