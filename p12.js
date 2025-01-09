const promisifiedFunction = (input, fn) => {
  return new Promise((resolve, reject) => {
    fn(input, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
};

function reject(arr, fn) {
  return new Promise(async (resolve, reject) => {
    try {
      const promisifiedResult = await Promise.all(
        arr.map((i) => promisifiedFunction(i, fn))
      );
      resolve(
        arr.filter((value, index) => {
          if (!promisifiedResult[index]) {
            return value;
          }
        })
      );
    } catch (e) {
      reject(e);
    }
  });
}

let numPromise = reject([1, 2, 3, 4, 5], function (num, callback) {
  setTimeout(function () {
    num *= 2;
    console.log(num);
    if (num === 7) {
      callback(true);
    } else {
      callback(null, num !== 4);
    }
  }, 2000);
});

numPromise
  .then((result) => {
    console.log("Success:" + result);
  })
  .catch(() => {
    console.log("No success");
  });
