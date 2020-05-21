import { delay } from './utils';

function runGenerator(genFunc) {
  // implement
}
test('Exercise 6', async () => {
  runGenerator(generatorFn);
  await delay(2000);
  console.log('finished');
});

function* generatorFn() {
  console.log('first part of function executed');
  yield delay(100);
  console.log('second part of function executed');
  yield delay(500);
  console.log('third part of function executed');
  yield delay(1000);
  console.log('last part of function executed');
}
