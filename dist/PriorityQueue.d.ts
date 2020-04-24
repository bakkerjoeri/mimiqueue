export declare class PriorityQueue<EntryType extends any> {
    private entries;
    enqueue(item: EntryType, priority: number): void;
    dequeue(): EntryType | undefined;
    peek(): EntryType | undefined;
    get length(): number;
}
