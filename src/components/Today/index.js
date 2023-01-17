import LocalTime from "../LocalTime";

export default function Today({
  daily,
  hourly
}) {
  return <>
    <h2>Today</h2>
    <ul>
      {
        hourly.map((data) => <li key={data.dt}>
          <LocalTime dt={data.dt} /> {data.temp}&deg;F
        </li>)
      }
    </ul>
  </>;
}
