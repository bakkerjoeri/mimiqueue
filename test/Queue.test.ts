import { Queue } from './../src/Queue';

describe('Queue', () => {
	test('adds items to the queue and dequeue in the right order', () => {
		const queue = new Queue();
		queue.enqueue('a');
		queue.enqueue('b');
		queue.enqueue('c');
		expect(queue.dequeue()).toBe('a');
		expect(queue.dequeue()).toBe('b');
		expect(queue.dequeue()).toBe('c');
	});

	test('length is 0 when nothing was queued', () => {
		const queue = new Queue();
		expect(queue.length).toBe(0);
	});

	test('length is correct after queueing and dequeueing items', () => {
		const queue = new Queue();
		queue.enqueue('a');
		queue.enqueue('b');
		queue.enqueue('c');
		queue.enqueue('d');
		expect(queue.length).toBe(4);

		queue.dequeue();
		expect(queue.length).toBe(3);
	});
	
	test('isEmpty is true when nothing is in the queue', () => {
		const queue = new Queue();
		expect(queue.isEmpty).toBe(true);
		queue.enqueue('a');
		queue.enqueue('b');
		queue.dequeue();
		queue.dequeue();
		expect(queue.isEmpty).toBe(true);
	});

	test('length is false when there is content in the queue', () => {
		const queue = new Queue();
		queue.enqueue('a');
		queue.enqueue('b');
		expect(queue.isEmpty).toBe(false);
	});
    
    test('peek returns the next item without removing it', () => {
		const queue = new Queue();
		queue.enqueue('a');
		queue.enqueue('b');

		expect(queue.length).toBe(2);
		expect(queue.peek()).toBe('a');
		expect(queue.length).toBe(2);
	});

	test('dequeue on an empty queue returns undefined', () => {
		const queue = new Queue();
		expect(() => { queue.dequeue() }).not.toThrow();
		expect(queue.dequeue()).toBeUndefined();
	});

	test('peek on an empty queue returns undefined', () => {
		const queue = new Queue();
		expect(() => { queue.peek() }).not.toThrow();
		expect(queue.peek()).toBeUndefined();
	});
});
