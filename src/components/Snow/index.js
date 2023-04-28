import convertMillimetersToInches from '../../utils/convertMillimetersToInches';

export default function Snow({
  mm,
}) {
  const inches = convertMillimetersToInches(mm);
  if (! inches) {
    return null;
  }
  return <p>{inches}" of snow over the next hour</p>;
}
