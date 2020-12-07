export declare class Queue<EntryType extends any> {
    private entries;
    enqueue(item: EntryType): void;
    dequeue(): EntryType | undefined;
    peek(): EntryType | undefined;
    get length(): number;
    get isEmpty(): boolean;
}
