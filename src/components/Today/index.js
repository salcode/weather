import LocalTime from "../LocalTime";
import Temp from "../Temp";

export default function Today({
  daily,
  hourly
}) {
  const today = daily[0] ?? {};
  return <>
    <h2>Today</h2>
    <p>{today.temp.max}&deg; / {today.temp.min}&deg;</p>
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
