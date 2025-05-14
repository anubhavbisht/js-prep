const QueueUsingStack = require("./p17");

class StackUsingQueue {
  constructor() {
    this.queue = new QueueUsingStack();
  }
  push(ele) {
    let currentSizeOfStack = this.queue.size();
    this.queue.enqueue(ele);
    while (currentSizeOfStack > 0) {
      const ele = this.queue.dequeue();
      this.queue.enqueue(ele);
      currentSizeOfStack -= 1;
    }
  }
  pop(){
    if(this.queue.isEmpty()){
        return null
    }
    const ele = this.queue.dequeue()
    console.log("Popped element is::", ele);
    return ele;
  }
  size(){
    return this.queue.size()
  }
  clear(){
    this.queue.clear()
  }
  peek(){
    if(this.queue.isEmpty()){
        return null
    }
    const ele = this.queue.peek()
    console.log("Top element is::", ele);
    return ele;
  }
}

let stack = new StackUsingQueue()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.size())
console.log(stack.clear())
console.log(stack.size())