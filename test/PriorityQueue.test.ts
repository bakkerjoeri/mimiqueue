import { PriorityQueue } from './../src/PriorityQueue';

describe('PriorityQueue', () => {
	test('adds items to the queue in the correct order', () => {
		const queue = new PriorityQueue();
		queue.enqueue('a', 7);
		queue.enqueue('b', 1);
		queue.enqueue('c', 12);
		expect(queue.dequeue()).toBe('b');
		expect(queue.dequeue()).toBe('a');
		expect(queue.dequeue()).toBe('c');
	});

	test('length is 0 when nothing was queued', () => {
		const queue = new PriorityQueue();
		expect(queue.length).toBe(0);
	});

	test('length is correct after queueing and dequeueing items', () => {
		const queue = new PriorityQueue();
		queue.enqueue('a', 7);
		queue.enqueue('b', 1);
		queue.enqueue('c', 12);
		expect(queue.length).toBe(3);

		queue.dequeue();
		expect(queue.length).toBe(2);
	});

	test('dequeue on an empty queue returns undefined', () => {
		const queue = new PriorityQueue();
		expect(() => { queue.dequeue() }).not.toThrow();
		expect(queue.dequeue()).toBeUndefined();
	});

	test('peek on an empty queue returns undefined', () => {
		const queue = new PriorityQueue();
		expect(() => { queue.peek() }).not.toThrow();
		expect(queue.peek()).toBeUndefined();
	});

	test('peek returns the first item without removing it', () => {
		const queue = new PriorityQueue();
		queue.enqueue('a', 2);
		queue.enqueue('b', 1);

		expect(queue.length).toBe(2);
		expect(queue.peek()).toBe('b');
		expect(queue.length).toBe(2);
	});
});
