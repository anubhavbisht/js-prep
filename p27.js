let car = {
  color: "red",
  car: "Swift",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.car} of color ${this.color} of ${currency}${price}`
  );
}

let result = purchaseCar.bind(car);
result("$", 100);
let result1 = purchaseCar.bind(car, "$", 100);
result1();
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "Its not callable");
  }
  context.fn = this;
  return (...newArgs) => {
    context.fn(...newArgs, ...args);
  };
};
result1 = purchaseCar.myBind(car, "$", 100);
result1();
result = purchaseCar.myBind(car);
result("$", 100);
