const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolves promise 1 in 3 seconds"), 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolves promise 2 in 2 seconds"), 500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Rejects promise 3 in 1 seconds"), 1000);
});
const promiseArray1 = [promise1, promise2, promise3];
// Promise.race(promiseArray1)
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const myPromiseRace = function (taskList) {
  return new Promise((resolve, reject) => {
    taskList.forEach((p) => {
      p.then(resolve).catch(reject);
    });
  });
};

myPromiseRace(promiseArray1)
  .then((val) => {
    console.log(val, "Success");
  })
  .catch((e) => {
    console.log(e, "Error");
  });
