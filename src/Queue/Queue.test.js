const Queue = require('./Queue')

describe('Queue', () => {
	let queue = new Queue()

	beforeEach(() => {
		queue = new Queue()
	})

	it('ENQUEUE: should enque data to the end of the queue', () => {
		queue.push(1)
		queue.push(2)
		expect(queue.first.val).toEqual(1)
	})

	it('ENQUEUE: should return the size of the queue', () => {
		const firstPushSize = queue.push(1)
		const secondPushSize = queue.push(2)
		expect(firstPushSize).toEqual(1)
		expect(secondPushSize).toEqual(2)
	})

	it('DEQUEUE: should pop data from the front of the queue', () => {
		queue.push(1)
		queue.push(2)
		queue.push(3)
		queue.push(4)
		const val = queue.pop()
		expect(val).toEqual(1)
	})

	it('DEQUEUE: should return null if there are no items to pop', () => {
		const val = queue.pop()
		expect(val).toEqual(null)
	})
})