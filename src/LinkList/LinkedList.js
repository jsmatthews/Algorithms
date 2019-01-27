class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val) {
		const newNode = new Node(val)

		if (this.head === null) {
			this.head = newNode
			this.tail = newNode
			this.lenght++
		} else {
			this.tail.next = newNode
			this.tail = this.tail.next
		}

		this.length++
		return this
	}

	pop() {
		if (!this.head) return null

		let currentNode = this.head
		let newTail = currentNode
		while (currentNode.next) {
			newTail = currentNode
			currentNode = currentNode.next
		}

		this.tail = newTail
		this.tail.next = null
		this.length--

		if (this.length === 0) {
			this.head = null
			this.tail = null
		}

		return currentNode
	}

	shift() {
		if (!this.head) return undefined

		let currentHead = this.head
		this.head = currentHead.next
		this.length--
		if (this.length === 0) {
			this.tail = null
		}
		return currentHead
	}

	unshift(val) {
		const newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head = newNode
		}

		this.length++
		return this
	}

	get(index) {
		if (index < 0 || index >= this.length) return null

		let counter = 0
		let current = this.head
		while (counter !== index) {
			current = current.next
			counter++
		}
		return current
	}

	set(index, val) {
		let foundNode = this.get(index)
		if (foundNode) {
			foundNode.val = val
			return true
		}

		return false
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false
		if (index === this.length) return !!this.push(val)
		if (index === 0) return !!this.unshift(val)

		let newNode = new Node(val)
		let prevNode = this.get(index - 1)
		let nextNode = prevNode.next
		prevNode.next = newNode
		newNode.next = nextNode
		this.length++
		return true
	}

	remove(index) {
		if (index < 0 || index > this.length) return null
		if (index === 0) return !!this.shift()
		if (index === this.length - 1) return !!this.pop()

		let prevNode = this.get(index - 1)
		let removedNode = prevNode.next
		prevNode.next = removedNode.next
		this.length--
		return removedNode
	}

	reverse() {
		let node = this.head
		this.head = this.tail
		this.tail = node
		let next
		let prev = null
		for (let i = 0; i < this.length; i++) {
			next = node.next
			node.next = prev
			prev = node
			node = next
		}
		return this
	}

	print() {
		let arr = []
		let current = this.head
		while (current) {
			arr.push(current)
			current = current.next
		}
		console.log(arr)
	}
}

module.exports = LinkedList