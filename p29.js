const Store = function () {
  this.list = {};
  this.set = function (key, value) {
    this.list[key] = value;
  };
  this.get = function (key) {
    return this.list[key];
  };
  this.has = function (key) {
    return !!this.list[key];
  };
};

const store = new Store();
store.set('a', "10");
store.set('b', "11");
store.set('c', "12");
console.log(store.get('a'));
