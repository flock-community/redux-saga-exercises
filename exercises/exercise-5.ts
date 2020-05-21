import { naturals, takeWhile } from './utils';

function* primes() {
  // implement
}

function isPrime(p: number) {
  // implement
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
