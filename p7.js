function asyncTask(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, value * 1000);
  });
}
function callback(value) {
  console.log(value);
}
const tasks = [asyncTask(3), asyncTask(1), asyncTask(2)];

function executeParallel(asyncTasks, callbackFunction) {
  asyncTasks.forEach((task) => {
    task.then((data) => {
      callbackFunction(data);
    });
  });
}

executeParallel(tasks, callback);
