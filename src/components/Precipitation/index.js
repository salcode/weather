import Accumulation from "../Accumulation";

export default function Precipitation({
  probability,
  rain,
  snow,
}) {
  if (! probability) {
    return null;
  }
  return <>
    (<span className="probability">{Math.round(probability*100)}%</span>) <Accumulation mm={rain + snow} />
  </>;
}
