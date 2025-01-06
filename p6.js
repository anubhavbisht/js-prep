function asyncTask(value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
}

const tasks = [asyncTask(3), asyncTask(1), asyncTask(2)];

// function asyncSeriesExecutor1(promises) {
//     promises.forEach(async (p)=>{
//         const data = await p
//         console.log(data)
//     })
// }

// asyncSeriesExecutor1(tasks)

// function asyncSeriesExecutor2(promises){
//     const promise = promises.shift()
//     promise.then((data)=>{
//         console.log(data)
//         if(promises.length > 0) {
//             asyncSeriesExecutor2(promises)
//         }
//     })
// }

// asyncSeriesExecutor2(tasks)

function asyncSeriesExecutor3(promises) {
  promises.reduce((acc, curr) => {
    return acc.then(() => {
      return curr.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
}

asyncSeriesExecutor3(tasks);
