function capitalize(iterable: Iterable<string>) {
  // implement
}

test('Exercise 3', () => {
  expect(capitalize('hello')).toEqual('Hello');
  expect(capitalize('hello world')).toEqual('Hello world');
  expect(capitalize(['H', 'e', 'l', 'l', 'o'])).toEqual('Hello');
  expect(capitalize(new Set(['H', 'e', 'l', 'l', 'o']))).toEqual('Helo');
});
