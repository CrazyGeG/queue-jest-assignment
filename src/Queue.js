class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift(); // You'll fix this later for Task 2
  }

  peek() {
    return this.items[0];
  }

  length() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  removeAll() {
    this.items = [];
  }
}

module.exports = Queue;

