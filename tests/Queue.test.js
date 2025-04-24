// /* Task 1*/
// const Queue = require('../src/Queue');

// describe('Queue Class Unit Tests', () => {
//   let queue;

//   beforeEach(() => {
//     queue = new Queue();
//   });

//   test('Constructor initializes an empty queue', () => {
//     expect(queue.length()).toBe(0);
//     expect(queue.isEmpty()).toBe(true);
//   });

//   test('enqueue adds a single item to the queue', () => {
//     queue.enqueue('first');
//     expect(queue.length()).toBe(1);
//     expect(queue.peek()).toBe('first');
//   });

//   test('enqueue adds multiple items preserving order', () => {
//     queue.enqueue('first');
//     queue.enqueue('second');
//     expect(queue.length()).toBe(2);
//     expect(queue.peek()).toBe('first');
//   });

//   test('dequeue removes and returns the first item', () => {
//     queue.enqueue('one');
//     queue.enqueue('two');
//     const removed = queue.dequeue();
//     expect(removed).toBe('one');
//     expect(queue.length()).toBe(1);
//     expect(queue.peek()).toBe('two');
//   });

//   test('peek returns the front of the queue without removing', () => {
//     queue.enqueue('alpha');
//     expect(queue.peek()).toBe('alpha');
//     expect(queue.length()).toBe(1);
//   });

//   test('length returns the correct size', () => {
//     expect(queue.length()).toBe(0);
//     queue.enqueue(1);
//     expect(queue.length()).toBe(1);
//     queue.enqueue(2);
//     expect(queue.length()).toBe(2);
//   });

//   test('isEmpty returns true for an empty queue', () => {
//     expect(queue.isEmpty()).toBe(true);
//   });

//   test('isEmpty returns false after enqueue', () => {
//     queue.enqueue('value');
//     expect(queue.isEmpty()).toBe(false);
//   });

//   test('removeAll clears the queue', () => {
//     queue.enqueue(1);
//     queue.enqueue(2);
//     queue.removeAll();
//     expect(queue.length()).toBe(0);
//     expect(queue.isEmpty()).toBe(true);
//   });
// });


/* TASK 2 */
const Queue = require('../src/Queue');

describe('Queue operations', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  // Task 1: Passing tests (100% coverage)
  test('Constructor initializes an empty queue', () => {
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test('enqueue adds item and preserves order', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.peek()).toBe('a');
    expect(queue.length()).toBe(2);
  });

  test('dequeue removes and returns first item', () => {
    queue.enqueue('x');
    expect(queue.dequeue()).toBe('x');
    expect(queue.length()).toBe(0);
  });

  test('peek returns the first item', () => {
    queue.enqueue('foo');
    expect(queue.peek()).toBe('foo');
  });

  test('length returns correct number of items', () => {
    queue.enqueue('bar');
    queue.enqueue('baz');
    expect(queue.length()).toBe(2);
  });

  test('isEmpty returns true for empty and false after enqueue', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test('removeAll clears the queue', () => {
    queue.enqueue(1);
    queue.removeAll();
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  // Task 2: Failing test
  test('dequeue should throw an error when queue is empty', () => {
    expect(() => queue.dequeue()).toThrow("Queue is empty");
  });
});
