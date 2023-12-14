//console.log('welcome');
//console.log('end');
//how to creat promise
const promise1 = new Promise((resolve, reject) => {
  let completedPromise = false;

  if (completedPromise) {
    resolve('completed promise 1');
  } else {
    reject('NotCompleted Promise 1');
  }
});

promise1.then(res => {
  console.log(res);
});

promise1.catch(err => {
  console.log(err);
});

console.log('end');
