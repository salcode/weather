export default function Accumulation({
  mm,
}) {
  const inches = Math.round(mm * 0.03937008 * 10) / 10;

  if (! inches) {
    return null;
  }
  return <span className="accumulation">{inches}"</span>;
}
