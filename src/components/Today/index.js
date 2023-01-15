export default function Today({
  daily,
  hourly
}) {
  return <>
    <h2>Today</h2>
    <ul>
      {
        hourly.map((data) => <li key={data.dt}>
          {data.dt} {data.temp}
        </li>)
      }
    </ul>
  </>;
}
