const timer = (value, increment) => {
  let count = value;
  let intervalId = null;
  let currentlyPaused = false;

  const start = () => {
    if (!intervalId && !currentlyPaused) {
      intervalId = setInterval(() => {
        console.log(count);
        count += increment;
      }, 1000);
    }
  };

  const pause = () => {
    currentlyPaused = true;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const play = () => {
    if (currentlyPaused) {
      currentlyPaused = false;
      start();
    }
  };

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    currentlyPaused = true;
  };

  return {
    start,
    pause,
    play,
    stop,
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

setTimeout(() => {
  console.log("Stopped");
  timerObj.stop();
}, 15000);
