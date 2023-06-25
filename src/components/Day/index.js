import Conditions from "../Conditions";
import Precipitation from "../Precipitation";
import UVI from "../UVI";

function getDayName(dt) {
  const dow = new Date(dt * 1000).toLocaleString(
    "en-US",
    { weekday: "short" }
  );
  return dow;
}

export default function Day({
  day,
}) {
  return <>
    { getDayName(day.dt) + ' '}
    <span>
      {Math.round(day.temp.max)}&deg; / {Math.round(day.temp.min)}&deg;
    </span> <Precipitation
      probability={day.pop}
      rain={day.rain ?? 0}
      snow={day.snow ?? 0}
    /> <UVI
        weatherData={day}
    />
    <Conditions conditions={day.weather} />
    <span>{day.summary}</span>
  </>;
}
