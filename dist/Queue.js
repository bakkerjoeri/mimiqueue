export class Queue {
    constructor() {
        this.entries = [];
    }
    enqueue(item) {
        this.entries.push(item);
    }
    dequeue() {
        return this.entries.shift();
    }
    peek() {
        if (this.isEmpty) {
            return;
        }
        return this.entries[0];
    }
    get length() {
        return this.entries.length;
    }
    get isEmpty() {
        return this.length === 0;
    }
}
