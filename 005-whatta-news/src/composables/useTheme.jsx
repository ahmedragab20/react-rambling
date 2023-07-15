import { useEffect, useRef, useState } from "react";

export function useTheme() {
  const [deviceTheme, setDeviceTheme] = useState(() => {
    const theme = window.localStorage.getItem("theme");
    return theme || "light";
  });

  const appHtml = useRef(document.documentElement);

  const setTheme = (theme) => {
    setDeviceTheme(theme);

    const newTheme = theme === "light" ? "dark" : "light";

    appHtml.current.classList.remove(newTheme);
    appHtml.current.classList.add(theme);

    window.localStorage.setItem("theme", theme);
  };

  const toggleTheme = () => {
    const newTheme = deviceTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    setTheme(deviceTheme);
  }, []);

  return {
    theme: deviceTheme,
    toggleTheme,
  };
}
