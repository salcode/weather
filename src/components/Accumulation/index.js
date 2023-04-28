import convertMillimetersToInches from '../../utils/convertMillimetersToInches';

export default function Accumulation({
  mm,
}) {
  const inches = convertMillimetersToInches(mm);

  if (! inches) {
    return null;
  }
  return <span className="accumulation">{inches}"</span>;
}
