const WEDDING_DATE = new Date('2023-09-30');

export default function useShowReceptionDetails() {
  const date = new Date();

  return date >= WEDDING_DATE;
}
