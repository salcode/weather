export default function Condition({
  condition,
}) {
  return <li>
    <img src={`http://openweathermap.org/img/wn/${condition.icon}.png`} />
    {condition.description}
  </li>;
}
