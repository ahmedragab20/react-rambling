import { useEffect, useState } from "react";
import { useLocation } from "../composables/useLocation";
import { get } from "../utils/axios";

export default function useCountry() {
  const { lat, long } = useLocation();
  const [userCountry, setUserCountry] = useState();

  const getCountryByCoords = async (lat, long) => {
    await get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
    )
      .then(async (res) => {
        const details = {
          city: res.data.city,
          continent: res.data.continent,
          continentCode: res.data.continentCode,
          countryCode: res.data.countryCode,
          countryName: res.data.countryName,
        };

        await getMoreCountryDetails(details);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMoreCountryDetails = async (details = {}) => {
    try {
      const { countryCode } = details;
      if (!countryCode) {
        throw new Error("Country code not found");
      }

      const res = await get(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      
      const { flags } = res.data[0];
      setUserCountry({
        ...details,
        flags,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      if (!!lat && !!long) {
        await getCountryByCoords(lat, long);
      }
    })();
  }, [lat, long]);
  return { userCountry };
}
