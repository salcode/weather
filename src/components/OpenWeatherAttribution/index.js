import openWeatherLogo from '../../images/open-weather-logo.png';

export default function OpenWeatherAttribution() {
  return <>
    <p>
      Weather data provided by <a href="https://openweathermap.org/">OpenWeather</a>
    </p>
    <img id="open-weather-logo" src={openWeatherLogo} alt="OpenWeather" />
  </>;
}
