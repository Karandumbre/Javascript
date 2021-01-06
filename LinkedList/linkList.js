import LinkListNode from "./linkListNode";

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    this.head = new LinkListNode(value, this.head);
  }

  append(value) {
    const node = new LinkListNode(value);

    let pointer = this.head;

    if (this.head === null) {
      this.head = node;
      return;
    }

    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = node;
  }

  delete(value) {
    let prevNode = null;
    let currNode = this.head;
    if (!currNode) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
    }

    while (currNode.value !== value && currNode) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = currNode.next;
    currNode.next = null;
  }

  // eslint-disable-next-line class-methods-use-this
  traverse() {
    if (this.head === null) {
      return;
    }
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }
  }

  contains(value) {
    let pointer = this.head;
    let isValueContains = false;
    while (pointer) {
      if (pointer === value) {
        isValueContains = true;
        pointer = null;
      }
    }

    return isValueContains;
  }

  length() {
    let pointer = this.head;
    let counter = 0;
    if (!pointer) {
      return 0;
    }
    while (pointer) {
      pointer = pointer.next;
      counter += 1;
    }
    return counter;
  }
}
