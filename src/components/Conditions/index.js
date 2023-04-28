import Condition from '../Condition';
import Rain from '../Rain';
import Snow from '../Snow';

export default function Conditions({
  className="conditions",
  conditions,
  rain,
  snow,
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
    <Snow snow={snow} />
  </>;
}
