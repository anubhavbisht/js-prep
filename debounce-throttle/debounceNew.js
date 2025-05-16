let counter = 0;
function getData(inputValue, x) {
  console.log(x, "Fetching data for:", inputValue, "| Count:", counter++);
}

function debounce(fn, delay, immediate) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    console.log(arguments);
    const callNow = immediate && !timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!callNow) {
        fn.apply(context, args);
      }
    }, delay);
    if (callNow) fn.apply(context, args);
  };
}

const betterFunction = debounce(
  function (event, x) {
    const inputValue = event.target.value;
    getData(inputValue, x);
  },
  300,
  true
);
