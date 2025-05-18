function toggle(...args) {
  let list = args;
  if (list.length === 0) {
    list = ["Default"];
  }
  let currentCount = 0;
  return () => {
    console.log(list[currentCount]);
    currentCount = (currentCount + 1) % list.length;
  };
}
const hello = toggle();
hello();
hello();
const names = toggle("anu", "manu", "gannu");
names();
names();
names();
names();
