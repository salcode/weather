import Day from "../Day";

export default function Week({
  daily,
}) {

  return <>
    <h2>Week</h2>
    <ul className="day-forecast-list">
    {
      daily.slice(1).map((data) => <li key={data.dt}>
        <Day day={data} />
      </li>)
    }
    </ul>
  </>;
}
