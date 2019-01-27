const Stack = require('./Stack')

describe('Stack', () => {
	let stack = new Stack()

	beforeEach(() => {
		stack = new Stack()
	})

	it('PUSH: should push data to the front of the stack', () => {
		stack.push(1)
		stack.push(2)
		expect(stack.first.val).toEqual(2)
	})

	it('PUSH: should return the size of the stack', () => {
		const firstPushSize = stack.push(1)
		const secondPushSize = stack.push(2)
		expect(firstPushSize).toEqual(1)
		expect(secondPushSize).toEqual(2)
	})

	it('POP: should pop data from the front of the stack', () => {
		stack.push(1)
		stack.push(2)
		stack.push(3)
		stack.push(4)
		const val = stack.pop()
		expect(val).toEqual(4)
	})

	it('POP: should return null if there are no items to pop', () => {
		const val = stack.pop()
		expect(val).toEqual(null)
	})
})