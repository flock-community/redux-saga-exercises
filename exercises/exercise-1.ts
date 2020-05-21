function* range(start: number, stop: number, step: number = 1): Generator<number> {
  // implement
}

test('Exercise 1', () => {
  expect([...range(1, 5)]).toStrictEqual([1, 2, 3, 4, 5]);
  expect([...range(1, 5, 2)]).toStrictEqual([1, 3, 5]);
  expect([...range(10, 30, 5)]).toStrictEqual([10, 15, 20, 25, 30]);
  expect([...range(0, 100, 25)]).toStrictEqual([0, 25, 50, 75, 100]);
});

