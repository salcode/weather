export default function LocalTime({
  dt,
  timeStyle='short',
}) {
  return new Date(dt * 1000)
    .toLocaleString("en-US", {
      dateStyle: 'short',
      timeStyle,
    }
  );
}
