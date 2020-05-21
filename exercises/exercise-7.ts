import { delay, primes } from './utils';

function* logPrimeEndlessly() {
  for (const item of primes()) {
    yield item;
    console.log(item);
  }
}

test('Exercise 7', async () => {
  let primeGenerator = logPrimeEndlessly();
  runGenerator(primeGenerator);
  await delay(2000);
  // implement canceling the generator
  console.log(primeGenerator.return());
});

function runGenerator(genObj) {
  step(genObj.next());

  function step({ value, done }) {
    if (!done) {
      setTimeout(() => step(genObj.next()), 0);
    }
  }
}
