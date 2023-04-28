import LocalTime from "../LocalTime";
import Temp from "../Temp";

export default function Today({
  daily,
  hourly
}) {
  return <>
    <h2>Today</h2>
    <details>
      <ul>
        {
          hourly.map((data) => <li key={data.dt}>
            <LocalTime dt={data.dt} /> <Temp temp={data.temp} />
          </li>)
        }
      </ul>
    </details>
  </>;
}
