export default function Snow({
  snow,
}) {
  if (! snow['1h']) {
    return null;
  }
  return <p>{snow['1h']} mm of snow over the next hour</p>;
}
