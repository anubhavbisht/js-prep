const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolves promise 1 in 3 seconds"), 3000);
});
promise1
  .then((val) => {
    console.log(val);
  })
  .catch((e) => {
    console.log(e);
  });
