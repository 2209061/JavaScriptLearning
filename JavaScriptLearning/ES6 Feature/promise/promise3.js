const promise1 = new promise((resolve, reject) => {
  let completepromise = true;
  if (completepromise) {
    resolve('promise 1 is complet');
  } else {
    reject('promise 1 is not complete');
  }
});
const promise2 = new promise((resolve, reject) => {
  resolve('promise 2 is complete');
});

//if we have more pomise we can use :
promise.all([promise1, promise2]).then(res => console.log(res));
//distructure
promise.all([promise1, promise2]).then(([res1, res2]) => console.log(res1));
