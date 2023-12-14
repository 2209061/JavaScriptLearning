const promise1 = new promise((resolve, reject) => {
  let completepromise = true;
  if (completepromise) {
    resolve('promise 1 is complet');
  } else {
    reject('promise 1 is not complete');
  }
});
promise1
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

const promise2 = new promise((resolve, reject) => {
  resolve('promise 2 is complete');
});
promise2.then(res => console.log(res));
