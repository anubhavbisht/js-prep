function divideArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function promisifyFunction(fn, val) {
  return new Promise((resolve, reject) => {
    fn(val, (err, cbValue) => {
      if (err) {
        reject(err);
      } else {
        resolve(cbValue);
      }
    });
  });
}

const mapLimit = (arr, limit, fn) => {
  const result = [];
  const dividedArray = divideArray(arr, limit);
  return new Promise(async (resolve, reject) => {
    try {
      for (let i = 1; i <= dividedArray.length; i += 1) {
        console.log(`Processing batch ${i}`);
        const batch = dividedArray[i - 1];
        const batchResult = await Promise.all(
          batch.map((x) => promisifyFunction(fn, x))
        );
        result.push([...batchResult]);
      }
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

let result = mapLimit([1, 2, 3, 4, 5], 2, function (input, callback) {
  setTimeout(function () {
    input *= 2;
    console.log(input);
    callback(null, input);
  }, 1000);
});

result
  .then((data) => {
    console.log("Success" + data);
  })
  .catch(() => {
    console.log("no success");
  });
