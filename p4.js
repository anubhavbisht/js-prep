const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolves promise 1 in 3 seconds"), 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolves promise 2 in 2 seconds"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Rejects promise 3 in 1 seconds"), 1000);
});

// Promise.allSettled([promise1, promise2, promise3]).then((val)=>{
//     console.log(val)
// })

const myPromiseAllSettled = function (taskList) {
  let promiseCount = 0;
  const result = [];
  return new Promise((resolve) => {
    taskList.forEach((p, index) => {
      const obj = {
        status: "",
      };
      Promise.resolve(p)
        .then((val) => {
          obj.status = "fulfilled";
          obj.value = val;
        })
        .catch((e) => {
          obj.status = "rejected";
          obj.reason = e;
        })
        .finally(() => {
          promiseCount += 1;
          result[index] = obj;
          if (promiseCount === taskList.length) {
            resolve(result);
          }
        });
    });
  });
};

myPromiseAllSettled([promise1, promise2, promise3]).then((val) => {
  console.log(val);
});
