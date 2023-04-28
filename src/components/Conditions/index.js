import Condition from '../Condition';
import Rain from '../Rain';

export default function Conditions({
  className="conditions",
  conditions,
  rain,
}) {
  return <>
    <ul className={className}>
      {conditions.map((condition) =>
        <Condition
          condition={condition}
          key={condition.id}
        />
      )}
    </ul>
    <Rain rain={rain} />
  </>;
}
