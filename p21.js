class PriorityElement {
  constructor(ele, pri) {
    this.ele = ele;
    this.pri = pri;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  size() {
    return this.queue.length;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.queue[this.size() - 1];
    }
  }
  print() {
    for (let x of this.queue) {
      console.log(`Element is ${x.ele} and priority is ${x.pri}`);
    }
  }
  dequeue() {
    return this.queue.pop();
  }
  enqueue(ele, pri) {
    const priorityElement = new PriorityElement(ele, pri);
    if (this.isEmpty()) {
      this.queue.push(priorityElement);
    } else {
      let elemAdded = true;
      for (let i = 0; i < this.size(); i++) {
        const elem = this.queue[i];
        if (priorityElement.pri < elem.pri) {
          this.queue.splice(i, 0, priorityElement);
          elemAdded = false;
          break;
        }
      }
      if(elemAdded){
        this.queue.push(priorityElement)
      }
    }
  }
}

const pq = new PriorityQueue();
pq.enqueue("Eat", 2);
pq.enqueue("Code", 1);
pq.enqueue("Sleep", 3);
pq.print();
// Output:
// Element is Code and priority is 1
// Element is Eat and priority is 2
// Element is Sleep and priority is 3

console.log("Peek:", pq.peek()); // Highest priority: Sleep
pq.dequeue(); // Removes "Sleep"
pq.print();
