export class PriorityQueue<EntryType extends any> {
	private entries: [EntryType, number][] = [];

	public enqueue(item: EntryType, priority: number): void {
		this.entries.push([item, priority]);
		this.entries.sort((a, b) => {
			return a[1] - b[1];
		});
	}

	public dequeue(): EntryType | undefined {
		const item = this.entries.shift();

		if (!item) {
			return;
		}

		return item[0];
	}

	public peek(): EntryType | undefined {
		if (this.isEmpty) {
			return;
		}

		return this.entries[0][0];
	}

	public get length(): number {
		return this.entries.length;
	}

	public get isEmpty(): boolean {
		return this.length === 0;
	}
}
