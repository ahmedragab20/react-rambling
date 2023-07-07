import { useEffect, useState } from "react";
import { Loading, Text } from "@nextui-org/react";

import useWeather from "../composables/use-weather";

export default function WeatherResultsCard({ cityTerm }) {
  const { getWeather } = useWeather();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getWeatherData = async () => {
    setLoading(true);
    await getWeather(cityTerm?.toLowerCase())
      .then((data) => {
        if (!!data.error) {
          setError("Check the city name");
          return;
        }

        setWeatherData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        setError("");
        getWeatherData();
      }
    };

    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [cityTerm]);

  //  Error
  if (error) {
    return (
      <div className="py-4 text-center text-danger">
        <small>{error}</small>
      </div>
    );
  } else if (loading) {
    return <Loading className="py-4" />;
  } else if (weatherData) {
    return (
      <div className="py-4 d-flex justify-content-center align-items-center flex-colums">
        <div>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
            >
            {weatherData?.temp}°C
          </Text>
        </div>
      </div>
    );
  } else {
    return <div className="py-4"></div>;
  }
}
