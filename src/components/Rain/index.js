import convertMillimetersToInches from '../../utils/convertMillimetersToInches';

export default function Rain({
  mm,
}) {
  const inches = convertMillimetersToInches(mm);
  if (! inches) {
    return null;
  }
  return <p>{inches}" of rain over the next hour</p>;
}
