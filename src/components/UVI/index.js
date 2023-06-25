export default function UVI({
  weatherData,
}) {
  const uvi = Math.round(weatherData.uvi);
  if (! uvi) {
    return;
  }
  return <span>
    UV Index: {uvi}
  </span>;
}
