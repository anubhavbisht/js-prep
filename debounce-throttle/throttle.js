const expensive = () => {
  console.log("This is an expensive function");
};

// window.addEventListener("keyup",expensive)

const throttle = (fn, delay) => {
  let flag = true;
  return function () {
    const context = this;
    const args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterExpensive = throttle(expensive, 300);
window.addEventListener("keyup", betterExpensive);
