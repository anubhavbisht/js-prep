let car = {
  color: "red",
  car: "Swift",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.car} of color ${this.color} of ${currency}${price}`
  );
}

purchaseCar.apply(car, ["$", 100]);

Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw new Error(this, "Its not callable");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car, ["$", 100]);
