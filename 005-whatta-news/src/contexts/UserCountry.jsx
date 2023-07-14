import { createContext, useEffect, useState, Children } from "react";
import { useLocation } from "../composables/useLocation";
import { get } from "../utils/axios";
export const UserCountryContext = ({children}) => {
  const { lat, long } = useLocation();
  const [userCountry, setUserCountry] = useState();
  const context = createContext(userCountry);
  useEffect(() => {
    (async () => {
      if (!!lat && !!long) {
        await get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
        ).then((res) => {
          const { countryCode, countryName, city, continentCode, continent } =
            res.data;

          setUserCountry({
            countryCode,
            countryName,
            city,
            continentCode,
            continent,
          });
        });
      }
    })();
  }, [lat, long]);

  return <context.Provider value={userCountry}>
    {Children.toArray(children)}
  </context.Provider>;
};
