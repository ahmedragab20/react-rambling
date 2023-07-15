import { useTheme } from "../composables/useTheme";
import Mode from "./Icons/Mode";

export function Header() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <div className="flex items-center justify-between py-2 min-h-[6vh] z-50 px-3 border-b border-stone-100 dark:border-stone-800 fixed top-0 left-0 w-full backdrop-blur-sm">
        <h1 className="text-xl font-semibold font-mono">😱 Whatta News!!</h1>
        <div>
          <button
            onClick={toggleTheme}
            className="px-2 py-1 bg-stone-200 dark:bg-stone-800 rounded-md"
          >
            <span className="sr-only">Toggle Dark Mode</span>
            <Mode />
          </button>
        </div>
      </div>
      <div className="fixed top-0 left-0 min-h-[6vh] bg-stone-50 dark:bg-stone-900 opacity-50 w-full z-0"></div>
    </>
  );
}
