export class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter = counter + 1;
      node = node.next;
    }
    return counter;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  removeLast() {
      if (!this.head) {
          return;
      }
      if (!this.head.next) {
          this.head = null;
      }
      let p = this.head;
      let n = p.next;
      while (n.next) {
          p = n;
          n = p.next;
      }
      p.next = null;
  }
  addToHead(data) {
    let n = new Node(data);
    if (!this.head) {
      this.head = n;
    } else {
      n.next = this.head;
      this.head = n;
    }
  }
  addToTail(data) {
    let count = null;
    let n = new Node(data);
    if (!this.head) {
      this.head = n;
    } else {
      count = this.head;
      while (count.next) {
        count = count.next;
      }
      count.next = n;
    }
  }
  contains(data) {
    let node = this.head;
    while (node) {
      let a = node.data[0];
      let b = node.data[1];
      if (a === data[0] && b === data[1]) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}
