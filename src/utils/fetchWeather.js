import exampleResponse from './example-response.json';

export default async function fetchWeather() {
  console.log(process.env);
  // Return test data if no REST API path is defined.
  if (! process.env.REACT_APP_WEATHER_REST_API_PATH) {
    return exampleResponse;
  }
  const resp = await fetch(process.env.REACT_APP_WEATHER_REST_API_PATH);
  return await resp.json();
};
