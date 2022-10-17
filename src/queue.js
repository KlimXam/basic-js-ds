const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.node = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.node;
  }
  enqueue(value) {
    if (this.length === 0) {
      this.node = new ListNode(value);
    } else {
      let actual = this.node;
      while (actual.next) {
        actual = actual.next;
      }
      actual.next = new ListNode(value);
    }
    this.length++;
  }

  dequeue() {
    let actual = this.node;
    this.node = actual.next;
    this.length--;
    return actual.value;
  }
}

module.exports = {
  Queue,
};
