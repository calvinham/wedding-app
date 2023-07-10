export function isNullish(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function exists<T>(value: T | null | undefined): value is T {
  return !isNullish(value);
}
