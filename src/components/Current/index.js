export default function Current({
  current: {
    temp,
    weather,
  },
}) {
  return <>
    <h2>Current</h2>
    <p>{temp}&deg; F</p>
    <ul className="current-weather">
    {
      weather.map((currentWeather) => <li key={currentWeather.id}>
        <img src={`http://openweathermap.org/img/wn/${currentWeather.icon}.png`} />
        {currentWeather.description}
      </li>)
    }
    </ul>
  </>;
}
