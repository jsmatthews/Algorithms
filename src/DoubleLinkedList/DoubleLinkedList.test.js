const DoubleLinkedList = require('./DoubleLinkedList')

describe('DoubleLinkedList', () => {
	let doubleLinkedList = new DoubleLinkedList()

	beforeEach(() => {
		doubleLinkedList = new DoubleLinkedList()
	})

	it('PUSH: should push data to the end of the list', () => {
		doubleLinkedList.push(1)
		expect(doubleLinkedList.head.val).toEqual(1)
	})

	it('POP: should pop data from the end of the list', () => {
		doubleLinkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)
		const node = doubleLinkedList.pop()
		expect(node.val).toEqual(4)
	})

	it('POP: should return null if there are no items to pop', () => {
		const node = doubleLinkedList.pop()
		expect(node).toEqual(null)
	})

	it('SHIFT: should shift data from the front of the list', () => {
		doubleLinkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		doubleLinkedList
			.shift()
		expect(doubleLinkedList.head.val).toEqual(2)
	})

	it('SHIFT: should shift data from the front of the list', () => {
		doubleLinkedList
			.shift()
		expect(doubleLinkedList.head).toEqual(null)
	})

	it('UNSHIFT: should unshift data to the front of the list', () => {
		doubleLinkedList
			.unshift(1)
			.unshift(2)
			.unshift(3)
			.unshift(4)

		expect(doubleLinkedList.head.val).toEqual(4)
	})

	it('GET: should get a value based on a specified index', () => {
		doubleLinkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		let node = doubleLinkedList.get(2)
		expect(node.val).toEqual(3)
	})

	it('GET: should return null if the index is out of bounds', () => {
		doubleLinkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		let node = doubleLinkedList.get(5)
		expect(node).toEqual(null)
	})

	it('SET: should update the value of the element at the specified index', () => {
		doubleLinkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		doubleLinkedList.set(2, 100)
		const node = doubleLinkedList.get(2)
		expect(node.val).toEqual(100)
	})

	it('SET: should return false if a node is not found', () => {
		doubleLinkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		const response = doubleLinkedList.set(5, 100)
		expect(response).toBeFalsy()
	})

	it('INSERT: should insert a new node at the specified index', () => {
		doubleLinkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		doubleLinkedList.insert(2, 100)
		const nodeAtIndexOne = doubleLinkedList.get(1)
		const nodeAtIndexTwo = doubleLinkedList.get(2)
		const nodeAtIndexThree = doubleLinkedList.get(3)
		expect(nodeAtIndexOne.val).toEqual(2)
		expect(nodeAtIndexTwo.val).toEqual(100)
		expect(nodeAtIndexThree.val).toEqual(3)
	})

	it('REMOVE: should remove a node at the specified index', () => {
		doubleLinkedList
			.push(1)
			.push(2)
			.push(3)
			.push(4)

		const removed = doubleLinkedList.remove(2)
		const nodeAtIndexOne = doubleLinkedList.get(1)
		const nodeAtIndexTwo = doubleLinkedList.get(2)
		expect(removed.val).toEqual(3)
		expect(nodeAtIndexOne.val).toEqual(2)
		expect(nodeAtIndexTwo.val).toEqual(4)
	})
})