let counter = 0;
function getData(inputValue) {
  console.log("Fetching data for:", inputValue, "| Count:", counter++);
}

function debounce(fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

const betterFunction = debounce(function (event) {
  const inputValue = event.target.value;
  getData(inputValue);
}, 300);
