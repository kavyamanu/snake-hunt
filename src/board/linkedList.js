export class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    this.tail = tail;
  }

  removeTail() {
    if (!this.tail) {
      return;
    }
    const node = this.tail;
    this.tail.prev.next = null;
    this.tail = node.prev
    node.prev = null;
  }

  addToHead(data) {
    let node = new Node(data, this.head);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.head.prev = node;
      this.head = node;
    }
  }

  contains([a, b]) {
    let node = this.head;
    while (node) {
      if (a === node.data[0] && b === node.data[1]) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
  isBody([a,b]) {
    let node = this.head.next;
    while (node) {
      if (a === node.data[0] && b === node.data[1]) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}
