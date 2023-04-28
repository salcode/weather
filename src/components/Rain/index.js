export default function Rain({
  rain,
}) {
  if (! rain['1h']) {
    return null;
  }
  return <p>{rain['1h']} mm of rain over the next hour</p>;
}
