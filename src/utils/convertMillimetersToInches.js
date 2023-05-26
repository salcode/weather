/**
 * Convert millimeters to inches,
 * rounding to the neareset 10th of an inch.
 */
export default function convertMillimetersToInches(mm) {
  return Math.round(mm * 0.03937008 * 10) / 10;
}
