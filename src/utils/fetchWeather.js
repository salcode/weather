export default async function fetchWeather() {
  const resp = await fetch(process.env.REACT_APP_WEATHER_REST_API_PATH);
  return await resp.json();
};
