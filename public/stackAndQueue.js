import Stack from '/stack.js';
import Queue from '/queue.js';

export function testStack() {
  console.log('Create Stack');
  const stack = Stack();
  stack.add(6);
  stack.add(6);
  stack.add(6);
  stack.add(39);
  stack.add(3);
  stack.pop();

  console.log(stack.pop());
}

export function testQueue() {
  const queue = Queue();
  queue.add(6);
  queue.add(39);
  queue.add(3);
  queue.remove();
  queue.remove();

  console.log('Create Queue');
  console.log(queue.peek());
}
