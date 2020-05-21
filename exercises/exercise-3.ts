function capitalize([first, ...rest]: Iterable<string>) {
  return first.toUpperCase() + rest.join('');
}

test('Exercise 3', () => {
  expect(capitalize('hello')).toEqual('Hello');
  expect(capitalize('hello world')).toEqual('Hello world');
  expect(capitalize(['H', 'e', 'l', 'l', 'o'])).toEqual('Hello');
  expect(capitalize(new Set(['H', 'e', 'l', 'l', 'o']))).toEqual('Helo');
});
