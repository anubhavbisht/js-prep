const timer = (value, increament) => {
  let pause = false;
  setInterval(() => {
    if (!pause) {
      console.log(value);
      value += increament;
    }
  }, 1000);
  setTimeout(() => {
    pause = true;
  }, 5000);
  setTimeout(() => {
    pause = false;
  }, 15000);
};

timer(1, 5);
