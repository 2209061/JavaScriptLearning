//Set Timeout
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('complete promise 1');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('complete promise 2');
  }, 1000);
});

promise1.race([promise1, promise2]).then(res => console.log(res));
