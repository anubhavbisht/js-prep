class minMaxStack {
  constructor() {
    this.stack = [];
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(ele) {
    if (this.isEmpty()) {
      this.stack.push({ value: ele, min: ele, max: ele });
    } else {
      const top = this.peek();
      const currentMin = Math.min(top.min, ele);
      const currentMax = Math.max(top.max, ele); // fixed typo here
      this.stack.push({ value: ele, min: currentMin, max: currentMax });
    }
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      const top = this.stack.pop();
      return top.value;
    }
  }

  min() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.peek().min;
    }
  }

  max() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.peek().max;
    }
  }
}

// ✅ Test
const newStack = new minMaxStack();
newStack.push(3);
newStack.push(1);
newStack.push(4);
console.log(newStack.min()); // 1
console.log(newStack.max()); // 4
newStack.pop();
console.log(newStack.min()); // 1
console.log(newStack.max()); // 3
