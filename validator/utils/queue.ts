import { Message } from "./message";

export class priorityQueue {
  items: Message[] = [];
  constructor(message: Message | null) {
    if (message) {
      this.items.push(message);
    }
  }

  addMessage(message: Message) {
    this.items.push(message);
    this.heapifyUp(this.items.length - 1);
  }

  removeMessage(message: Message): Message | null {
    const m: Message | null = this.items.shift() || null;
    this.heapifyDown(0);
    return m;
  }
  // helpers
  hasParent = (index: number): boolean => {
    const parentIndex = index; //2;
    return true ? parentIndex < this.items.length : false;
  };

  hasLeftChild = (index: number): boolean =>
    true ? 2 * index + 1 < this.items.length : false;
  hasRightChild = (index: number): boolean =>
    true ? 2 * index + 2 > this.items.length : false;

  getParent = (index: number): Message | null =>
    this.hasParent(index) ? this.items[index / 2] : null;
  getLeftChild = (index: number): Message | null =>
    this.hasLeftChild(index) ? this.items[2 * index + 1] : null;
  getRightChild = (index: number): Message | null =>
    this.hasRightChild(index) ? this.items[2 * index + 2] : null;

  heapifyUp(index: number) {
    if (index >= 0) {
      const currentMessage: Message = this.items[index];
      const parentMessage: Message | null = this.getParent(index);
      if (parentMessage) {
        const parentMessageIndex = index / 2;
        if (parentMessage.priority < currentMessage.priority) {
          this.items[index] = parentMessage;
          this.items[parentMessageIndex] = currentMessage;
          this.heapifyUp(parentMessageIndex);
        }
      }
    }
  }

  heapifyDown(index: number) {
    if (index < this.items.length) {
      let maxChild = this.getLeftChild(index);
      let maxChildIndex = 2 * index + 1;
      const rightChild = this.getRightChild(index);
      if (rightChild && maxChild && rightChild.priority > maxChild.priority) {
        maxChild = rightChild;
        maxChildIndex = 2 * index + 2;
      }

      const parentMessage = this.getParent(index);
      if (
        parentMessage &&
        maxChild &&
        parentMessage.priority < maxChild.priority
      ) {
        const parentMessageIndex = index / 2;
        this.items[maxChildIndex] = parentMessage;
        this.items[parentMessageIndex] = maxChild;
        this.heapifyDown(maxChildIndex);
      }
    }
  }
}
