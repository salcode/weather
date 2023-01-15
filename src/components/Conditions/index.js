import Condition from '../Condition';

export default function Conditions({
  className="conditions",
  conditions,
}) {
  return <ul className={className}>
    {conditions.map((condition) =>
      <Condition
        condition={condition}
        key={condition.id}
      />
    )}
  </ul>;
}
