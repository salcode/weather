export default function UVI({
  weatherData,
}) {
  const uvi = Math.round(weatherData.uvi);
  if (! uvi) {
    return;
  }
  return <span className="uv-index">
    UV Index: {uvi}
  </span>;
}
