const timer = (value, increment) => {
  let count = value;
  let intervalId = null;
  let stop = false;

  const start = () => {
    if (!intervalId && !stop) {
      intervalId = setInterval(() => {
        console.log(count);
        count += increment;
      }, 1000);
    }
  };

  const pause = () => {
    stop = true;
    if (intervalId) {
      clearInterval(intervalId); 
      intervalId = null;
    }
  };

  const play = () => {
    if (stop) {
      stop = false;
      start(); 
    }
  };

  return {
    start,
    pause,
    play,
  };
};

const timerObj = timer(10, 10);
timerObj.start();

setTimeout(() => {
  console.log("Pause");
  timerObj.pause();
}, 5000);

setTimeout(() => {
  console.log("Play");
  timerObj.play();
}, 8000);
