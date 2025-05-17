let car = {
  color: "red",
  car: "Swift",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.car} of color ${this.color} of ${currency}${price}`
  );
}

purchaseCar.call(car, "$", 100);

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "Its not callable");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car, "$", 100);
