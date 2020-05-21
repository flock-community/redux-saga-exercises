import { naturals, takeWhile } from './utils';

function* primes() {
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

test('Exercise 5', () => {
  expect([...takeWhile(primes(), (i) => i < 100)]).toStrictEqual([
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
  ]);
});
