import { useEffect, useRef, useState } from "react";

export default function useAppTheme() {
  const [deviceTheme, setDeviceTheme] = useState(() => {
    const theme = window.localStorage.getItem("theme");
    return theme ? theme : "light";
  });
  const appHtml = useRef(document.documentElement);
  const setTheme = (theme) => {
    setDeviceTheme(theme);
    appHtml.current.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    console.log("useAppTheme useEffect", deviceTheme);
    setTheme(deviceTheme);
  }, [deviceTheme]);

  return {
    theme: deviceTheme,
    setTheme,
  };
}
