const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolves promise 1 in 3 seconds"), 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolves promise 2 in 2 seconds"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Rejects promise 3 in 1 seconds"), 1000);
});
// const promiseArray1 = [promise1, promise2, promise3];
// Promise.any(promiseArray1)
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Rejects promise 4 in 1 seconds"), 1000);
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Rejects promise 5 in 1 seconds"), 1000);
});
const promiseArray2 = [promise3, promise4, promise5];

// Promise.any(promiseArray2)
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const myPromiseAny = function (taskList) {
  const errorArray = [];
  let promisesFailed = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((p, index) => {
      Promise.resolve(p)
        .then(resolve)
        .catch((e) => {
          promisesFailed += 1;
          errorArray[index] = e;
          if (promisesFailed === taskList.length) {
            reject(errorArray);
          }
        });
    });
  });
};

myPromiseAny(promiseArray2)
  .then((val) => {
    console.log(val);
  })
  .catch((e) => {
    console.log(e);
  });
