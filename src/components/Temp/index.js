export default function Temp({
  temp,
}) {
  return <>
    {Math.round(temp)}&deg;F
  </>;
}
