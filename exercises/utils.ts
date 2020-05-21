export function* range(start: number, stop: number, step: number = 1): Generator<number> {
  for (let i = start; i <= stop; i += step) yield i;
}

export function* sequence<T>(seed: T, next: (t: T) => T): Generator<T> {
  for (let value = seed; ; value = next(value)) yield value;
}

export function naturals(start: number = 0) {
  return sequence(start, (i) => i + 1);
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function* takeWhile<T>(iterable: Generator<T>, predicate: (t: T) => boolean) {
  for (const item of iterable) {
    if (!predicate(item)) break;
    yield item;
  }
}

export function* primes() {
  for (const p of naturals(2)) {
    if (isPrime(p)) yield p;
  }
}

function isPrime(p: number) {
  for (const n of takeWhile(naturals(2), (n) => n < p)) {
    if (p % n === 0) return false;
  }
  return true;
}
