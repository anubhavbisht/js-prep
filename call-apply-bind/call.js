console.log("Hi");
const p1 = {
  firstName: "Anubhav",
  lastName: "Bisht",
  printName: function (keyword) {
    console.log(this.firstName, this.lastName, keyword);
  },
};

const p2 = {
  firstName: "asdfa",
  lastName: "Bisht",
};

const p3 = {
  firstName: "asasdfasdfa",
  lastName: "Bisht",
};

const p4 = {
  firstName: "qerwr",
  lastName: "Bisht",
};

p1.printName('Ge');
p1.printName.call(p2,'hi');
p1.printName.apply(p3, ['sfdsf'])

const printNamep4 = p1.printName.bind(p4, 'nbinded')
console.log(printNamep4)
printNamep4()