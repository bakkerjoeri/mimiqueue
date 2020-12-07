export class Queue<EntryType extends any> {
	private entries: EntryType[] = [];

	public enqueue(item: EntryType): void {
		this.entries.push(item);
	}

	public dequeue(): EntryType | undefined {
		return this.entries.shift();
	}

	public peek(): EntryType | undefined {
		if (this.isEmpty) {
			return;
		}

		return this.entries[0];
	}

	public get length(): number {
		return this.entries.length;
    }
    
    public get isEmpty(): boolean {
        return this.length === 0;
    }
}
