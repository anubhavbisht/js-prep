const mapSeries = (arr, fn) => {
  const result = [];
  return new Promise(async (resolve, reject) => {
    try {
      for (let x of arr) {
        const data = await new Promise((res, rej) => {
          fn(x, (err, value) => {
            if (err) {
              rej(err);
            } else {
              res(value);
            }
          });
        });
        result.push(data);
      }
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

let result = mapSeries([1, 2, 3, 4, 5], function (input, callback) {
  setTimeout(function () {
    input *= 2;
    console.log(input);
    if (input === 12) {
      callback(true);
    } else {
      callback(null, input);
    }
  }, 1000);
});

result
  .then((data) => {
    console.log("Success" + data);
  })
  .catch(() => {
    console.log("no success");
  });
