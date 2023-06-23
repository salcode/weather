export default async function fetchWeather() {
  const resp = await fetch('/wp-json/myweather/v1/weather');
  return await resp.json();
};
