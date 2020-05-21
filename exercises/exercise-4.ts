import { naturals, sequence } from './utils';

function* takeWhile<T>(iterable: Generator<T>, predicate: (t: T) => boolean) {
  // implement
}

test('Exercise 4', () => {
  const squaredSmallerThan50 = takeWhile(naturals(), (i) => i ** 2 <= 50);
  expect(Math.max(...squaredSmallerThan50)).toStrictEqual(7);

  let negativeGreaterThanMinus50 = takeWhile(
    sequence(-5, (i) => i - 1),
    (i) => i > -50,
  );
  expect(Math.min(...negativeGreaterThanMinus50)).toStrictEqual(-49);
});
