import { range } from './utils';

function sum(iterator: Generator<number>) {
  // implement
}

test('Exercise 2', () => {
  expect(sum(range(0, 100, 25))).toEqual(250);
  expect(sum(range(0, 10))).toEqual(55);
});
