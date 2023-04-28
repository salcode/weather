import Accumulation from "../Accumulation";

export default function Precipitation({
  probability,
  rain,
  snow,
}) {
  return <>
    (<span className="probability">{probability*100}%</span>) <Accumulation mm={rain + snow} />
  </>;
}
