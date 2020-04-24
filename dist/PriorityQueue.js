export class PriorityQueue {
    constructor() {
        this.entries = [];
    }
    enqueue(item, priority) {
        this.entries.push([item, priority]);
        this.entries.sort((a, b) => {
            return a[1] - b[1];
        });
    }
    dequeue() {
        const item = this.entries.shift();
        if (!item) {
            return;
        }
        return item[0];
    }
    peek() {
        if (this.length === 0) {
            return;
        }
        return this.entries[0][0];
    }
    get length() {
        return this.entries.length;
    }
}
