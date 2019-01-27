const LinkedList = require('./LinkedList')

describe('LinkedList', () => {
	let linkedList = new LinkedList()

	beforeEach(() => {
		linkedList = new LinkedList()
	})

	it('PUSH: should push data to the end of the list', () => {
		linkedList.push(1)
		expect(linkedList.head.val).toEqual(1)
	})

	it('POP: should pop data from the end of the list', () => {
		linkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)
		const node = linkedList.pop()
		expect(node.val).toEqual(4)
	})

	it('POP: should return null if there are no items to pop', () => {
		const node = linkedList.pop()
		expect(node).toEqual(null)
	})

	it('SHIFT: should shift data from the front of the list', () => {
		linkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		linkedList
			.shift()
		expect(linkedList.head.val).toEqual(2)
	})

	it('SHIFT: should shift data from the front of the list', () => {
		linkedList
			.shift()
		expect(linkedList.head).toEqual(null)
	})

	it('UNSHIFT: should unshift data to the front of the list', () => {
		linkedList
			.unshift(1)
			.unshift(2)
			.unshift(3)
			.unshift(4)

		expect(linkedList.head.val).toEqual(4)
	})

	it('GET: should get a value based on a specified index', () => {
		linkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		let node = linkedList.get(2)
		expect(node.val).toEqual(3)
	})

	it('GET: should return null if the index is out of bounds', () => {
		linkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		let node = linkedList.get(5)
		expect(node).toEqual(null)
	})

	it('SET: should update the value of the element at the specified index', () => {
		linkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		linkedList.set(2, 100)
		const node = linkedList.get(2)
		expect(node.val).toEqual(100)
	})

	it('SET: should return false if a node is not found', () => {
		linkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		const response = linkedList.set(5, 100)
		expect(response).toBeFalsy()
	})

	it('INSERT: should insert a new node at the specified index', () => {
		linkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		linkedList.insert(2, 100)
		const nodeAtIndexOne = linkedList.get(1)
		const nodeAtIndexTwo = linkedList.get(2)
		const nodeAtIndexThree = linkedList.get(3)
		expect(nodeAtIndexOne.val).toEqual(2)
		expect(nodeAtIndexTwo.val).toEqual(100)
		expect(nodeAtIndexThree.val).toEqual(3)
	})

	it('REMOVE: should remove a node at the specified index', () => {
		linkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		const removed = linkedList.remove(2)
		const nodeAtIndexOne = linkedList.get(1)
		const nodeAtIndexTwo = linkedList.get(2)
		expect(removed.val).toEqual(3)
		expect(nodeAtIndexOne.val).toEqual(2)
		expect(nodeAtIndexTwo.val).toEqual(4)
	})

	it('REVERSE: should reverse a list', () => {
		linkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)
			.reverse()

		expect(linkedList.head.val).toEqual(4)
		expect(linkedList.head.next.val).toEqual(3)
		expect(linkedList.head.next.next.val).toEqual(2)
		expect(linkedList.head.next.next.next.val).toEqual(1)
	})

})