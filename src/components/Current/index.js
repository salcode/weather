import Conditions from "../Conditions";
import LocalTime from "../LocalTime";

export default function Current({
  current: {
    dt,
    temp,
    rain = {},
    snow = {},
    weather,
  },
}) {
  return <>
    <h2>Current</h2>
    <p>{Math.round(temp)}&deg; F</p>
    <p><LocalTime dt={dt} /></p>
    <Conditions
      conditions={weather}
      rain={rain}
      snow={snow}
    />
  </>;
}
