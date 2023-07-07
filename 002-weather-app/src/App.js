import { NextUIProvider } from "@nextui-org/react";
import WeatherCard from "./components/WeatherCard";
function App() {
  return (
    // https://openweathermap.org/current - API
    <NextUIProvider>
      <div
        style={{
          width: "100%",
          height: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WeatherCard />
      </div>
    </NextUIProvider>
  );
}

export default App;
