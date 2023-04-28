import Conditions from "../Conditions";
import LocalTime from "../LocalTime";

export default function Current({
  current: {
    dt,
    temp,
    rain = {},
    weather,
  },
}) {
  return <>
    <h2>Current</h2>
    <p>{temp}&deg; F</p>
    <LocalTime dt={dt} />
    <Conditions
      conditions={weather}
      rain={rain}
    />
  </>;
}
