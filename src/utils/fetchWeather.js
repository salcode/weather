import exampleResponse from './example-response.json';

export default async function fetchWeather() {
  return exampleResponse;
  const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=40.321510&lon=-75.983050&appid={APIKEY}&units=imperial';
  const resp = await fetch(url);
  return await resp.json();
};