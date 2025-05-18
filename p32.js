function sampler(fn, sampleLimit) {
  let count = 1;
  return () => {
    if (count % sampleLimit == 0) {
      fn();
    } else {
      console.log("None");
    }
    count += 1;
  };
}

function message() {
  console.log("Hello");
}

const sample = sampler(message, 4);
sample();
sample();
sample();
sample();
sample();
sample();
sample();
sample();
sample();
