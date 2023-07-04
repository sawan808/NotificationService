class PriorityQueue {
    // constructor(message: Message | null) {
    //   if (message) {
    //     this.items.push(message);
    //   }
    // }
    constructor() {
        // helpers
        this.hasParent = (index) => {
            const parentIndex = index; //2;
            return true ? parentIndex < this.items.length : false;
        };
        this.hasLeftChild = (index) => true ? 2 * index + 1 < this.items.length : false;
        this.hasRightChild = (index) => true ? 2 * index + 2 > this.items.length : false;
        this.getParent = (index) => this.hasParent(index) ? this.items[index / 2] : null;
        this.getLeftChild = (index) => this.hasLeftChild(index) ? this.items[2 * index + 1] : null;
        this.getRightChild = (index) => this.hasRightChild(index) ? this.items[2 * index + 2] : null;
        this.items = [];
    }
    addMessage(message) {
        this.items.push(message);
        this.heapifyUp(this.items.length - 1);
    }
    removeMessage(message) {
        const m = this.items.shift() || null;
        this.heapifyDown(0);
        return m;
    }
    heapifyUp(index) {
        if (index >= 0) {
            const currentMessage = this.items[index];
            const parentMessage = this.getParent(index);
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
    heapifyDown(index) {
        if (index < this.items.length) {
            let maxChild = this.getLeftChild(index);
            let maxChildIndex = 2 * index + 1;
            const rightChild = this.getRightChild(index);
            if (rightChild && maxChild && rightChild.priority > maxChild.priority) {
                maxChild = rightChild;
                maxChildIndex = 2 * index + 2;
            }
            const parentMessage = this.getParent(index);
            if (parentMessage &&
                maxChild &&
                parentMessage.priority < maxChild.priority) {
                const parentMessageIndex = index / 2;
                this.items[maxChildIndex] = parentMessage;
                this.items[parentMessageIndex] = maxChild;
                this.heapifyDown(maxChildIndex);
            }
        }
    }
}
export const pQueue = new PriorityQueue();
