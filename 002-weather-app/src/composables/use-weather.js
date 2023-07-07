export default function useWeather() {
  let loading = false
  const getWeather = async (city) => {
    try {
      loading = true
      const response = await fetch(
        `https://api.api-ninjas.com/v1/weather?city=${city}`,
        {
          method: "GET",
          headers: {
            'X-Api-Key': '7VRkQAGz+nL6txkBeil9Pw==MOxV2D7nLZAUF1ZL',
          }
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      loading = false
    }
  };
  return { loading, getWeather };
}
