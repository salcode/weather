export default function LocalTime({
  dateStyle='medium',
  dt,
  timeStyle='short',
}) {
  return new Date(dt * 1000)
    .toLocaleString("en-US", {
      dateStyle,
      timeStyle,
    }
  );
}
