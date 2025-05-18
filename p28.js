function Car() {}
const car = new Car();
// console.log(car instanceof Car);
// console.log(car instanceof Object);

function isThisInstance(obj, target) {
  if (obj == null || typeof obj !== "object") {
    return false;
  }
  while (obj) {
    // console.log(obj);
    if (obj.__proto__ === target.prototype) {
      return true;
    }
    obj = obj.__proto__;
  }
  return false;
}
console.log(isThisInstance(car, Car));
console.log(isThisInstance(car, Object));
console.log(isThisInstance(42, Number));
