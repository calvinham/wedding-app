export function numToPx(num: number) {
  return `${num}px`;
}

export function capitalize(str: string) {
  const strArr = str.split(' ');
  const capitalized = strArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return capitalized.join(' ');
}

export function capitalizeOrUndef(str: string | undefined) {
  if (!str) return undefined;
  return capitalize(str);
}
