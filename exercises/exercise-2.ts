import { range } from './utils';

function sum(iterator: Generator<number>) {
  let sum = 0;
  for (let result = iterator.next(); !result.done; result = iterator.next()) {
    sum += result.value;
  }
  return sum;
}

test('Exercise 2', () => {
  expect(sum(range(0, 100, 25))).toEqual(250);
  expect(sum(range(0, 10))).toEqual(55);
});
