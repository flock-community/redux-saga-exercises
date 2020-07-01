import { delay, primes } from './utils';

function* logPrimeEndlessly() {
  // implement
}

test('Exercise 7', async () => {
  let primeGenerator = logPrimeEndlessly();
  runGenerator(primeGenerator);
  await delay(50);
  // implement canceling the generator
});

function runGenerator(genObj) {
  step(genObj.next());

  function step({ done }) {
    if (!done) {
      delay(0).then(() => {
        step(genObj.next());
      });
    }
  }
}
