const timer = (value, increament) => {
  setInterval(() => {
    console.log(value);
    value += increament;
  }, 1000);
};

timer(1, 5);
