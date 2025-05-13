if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (onFinally) {
    const constructor = this.constructor;

    return this.then(
      (value) => constructor.resolve(onFinally()).then(() => value),
      (reason) =>
        constructor.resolve(onFinally()).then(() => {
          throw reason;
        })
    );
  };
}
