export function is_valid(n: number): boolean {
  return typeof n === "number" && !Number.isNaN(n);
}

export function clamp(n: number, min: number, max: number) {
  n = is_valid(min) ? Math.max(min, n) : n;
  n = is_valid(max) ? Math.min(max, n) : n;
  return n;
}
