test('Exercise 8', async () => {

});


function runSaga(genFunc) {
  const genObj = genFunc();
  step(genObj.next());

  function step({ value, done }) {
    if (!done) {
      value
        .then((result) => {
          step(genObj.next(result));
        })
        .catch((error) => {
          step(genObj.throw(error));
        });
    }
  }
}
