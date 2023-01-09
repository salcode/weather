export default function Weather({
  data,
}) {
  if (! data) {
    return null;
  }
  return(
    <h2>Weather goes here</h2>
  );
}
