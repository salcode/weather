import Conditions from "../Conditions";

export default function Current({
  current: {
    temp,
    weather,
  },
}) {
  return <>
    <h2>Current</h2>
    <p>{temp}&deg; F</p>
    <Conditions
      conditions={weather}
    />
  </>;
}
