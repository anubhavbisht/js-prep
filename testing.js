// function sumBy10() {
//   const num = 10;
//   function add(number) {
//     return num + number;
//   }
//   return add;
// }

// const fn = sumBy10();
// const result = fn(20);
// console.log(result);

// function x(a){
//     function y(b){
//         function z(c){
//             return a+b+c
//         }
//         return z
//     }
//     return y
// }

// const result = x(10)(20)(30)
// console.log(result)

// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((previousValue, currentValue, currentIndex, array) => {
//   const nextValue = previousValue + currentValue;
//   return nextValue;
// }, 0);
// console.log(sum)

// const arr = [1.1, 1.2, 1.3, 2.1, 2.2, 3.1];
// const segregate = arr.reduce((previousValue, currentValue) => {
//   const floored = Math.floor(currentValue);
//   if (!previousValue[floored]) {
//     previousValue[floored] = [];
//   }
//   previousValue[floored].push(currentValue);
//   return previousValue
// }, {});
// console.log(segregate);

// const upperCase = (str) => {
//   return str.toUpperCase();
// };

// const reverse = (str) => {
//   return str.split("").reverse().join("");
// };

// const append = (str) => {
//   return "Hello" + str;
// };
// const initialValue = "anubhav";
// const arr = [upperCase, reverse, append];
// const result = arr.reduce((previousValue, currentValue) => {
//     const res = currentValue(previousValue)
//     return res
// }, initialValue);
// console.log(result)

// const asyncTask = function (time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`completing in ${time} seconds`), time * 1000);
//   });
// };

// const promiseArray = [() => asyncTask(3), () => asyncTask(2), () => asyncTask(1)];

// promiseArray.reduce((previousValue, currentValue) => {
//   return previousValue.then(() => {
//     return currentValue().then((val) => {
//       console.log(val); // Log the result of the current task
//     });
//   });
// }, Promise.resolve()); // Start with a resolved promise

const promise =  new Promise((resolve,reject)=>{
    resolve('Hi')
})

promise.then((data)=>{
    console.log(data)
})
promise.then((x)=>{
    console.log(x)
})