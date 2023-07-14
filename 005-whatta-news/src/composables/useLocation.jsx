import { useEffect, useState } from "react";

export function useLocation() {
  const [location, setLocation] = useState({
    lat: 0,
    long: 0,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
      console.error("Not Available");
    }
  }, []);
  return {
    lat: location.lat || undefined,
    long: location.long || undefined,
  };
}
