import Conditions from "../Conditions";
import LocalTime from "../LocalTime";
import Precipitation from "../Precipitation";
import Temp from "../Temp";
import UVI from "../UVI";

export default function Today({
  daily,
  hourly
}) {
  const today = daily[0] ?? {};
  return <>
    <h2>Today</h2>
    <p>
      {Math.round(today.temp.max)}&deg; / {Math.round(today.temp.min)}&deg;
    </p>
    <h3>Hourly</h3>
    <details>
      <ul className="hour-forecast-list">
        {
          hourly.map((data) => <li key={data.dt}>
            <h3>
              <LocalTime dt={data.dt} />
            </h3>
            <Temp temp={data.temp} /> <Precipitation
              probability={data.pop}
            /> <UVI weatherData={data} />
            <Conditions conditions={data.weather} />
          </li>)
        }
      </ul>
    </details>
  </>;
}
