class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  peek() {
    const top = this.stack1[this.stack1.length - 1];
    console.log("Top element in queue is::", top);
    return top;
  }

  enqueue(item) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack2.push(item);
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    const poppedElement = this.stack1.pop();
    console.log("Dequeued element is::", poppedElement);
    return poppedElement;
  }

  size() {
    console.log("Queue size is::", this.stack1.length);
    return this.stack1.length;
  }

  isEmpty() {
    if (this.stack1.length === 0) {
      console.log("Queue is empty");
      return true;
    }
    return false;
  }

  clear() {
    this.stack1 = [];
    this.stack2 = [];
    console.log("Queue is cleared for new usage");
  }
}

const queue = new QueueUsingStack();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
module.exports = QueueUsingStack