class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(size) {
    this.size = size;
    this.map = new Map();
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  #addNode(node) {
    const prev = this.tail.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
  }
  #removeNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }
  #moveToTail(node) {
    this.#removeNode(node);
    this.#addNode(node);
  }
  get(key) {
    if (!this.map.has(key)) {
      return null;
    } else {
      const node = this.map.get(key);
      this.#moveToTail(node);
      return node.value;
    }
  }
  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this.#moveToTail(node);
    } else {
      if (this.map.size >= this.size) {
        const leastUsedNode = this.head.next;
        this.#removeNode(leastUsedNode);
        this.map.delete(leastUsedNode.key);
      }
      const newNode = new Node(key, value);
      this.#addNode(newNode);
      this.map.set(key, newNode);
    }
  }
  print() {
    let node = this.head.next;
    const entries = [];
    while (node !== this.tail) {
      entries.push(`[${node.key}: ${node.value}]`);
      node = node.next;
    }
    console.log("Cache:", entries.join(" <-> "));
  }
}

const lru = new LRUCache(3);
lru.put(1, 'A');
lru.put(2, 'B');
lru.put(3, 'C');
lru.print(); // [1: A] <-> [2: B] <-> [3: C]

lru.get(2);  // moves 2 to the end
lru.print();
lru.put(4, 'D'); // evicts 1 (least recently used)
lru.print(); // [3: C] <-> [2: B] <-> [4: D]