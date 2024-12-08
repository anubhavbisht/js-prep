const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolves in 3 seconds"), 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolves in 2 seconds"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Rejects in 1 seconds"), 1000);
});

//generic promise all

// Promise.all([promise1, promise2, promise3])
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const promiseArray = [promise1, promise2];

const myPromiseAll = function (taskList) {
  const result = [];
  let promisesCompleted = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((p, index) => {
      p.then((val) => {
        result[index] = val;
        promisesCompleted += 1;
        if (promisesCompleted === taskList.length) {
          resolve(result);
        }
      }).catch((e) => {
        reject(e);
      });
    });
  });
};
myPromiseAll(promiseArray)
  .then((val) => {
    console.log(val);
  })
  .catch((e) => {
    console.log(e);
  });
