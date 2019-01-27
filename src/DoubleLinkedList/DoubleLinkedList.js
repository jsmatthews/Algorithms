class Node {
	constructor(val) {
		this.val = val
		this.next = null
		this.prev = null
	}
}

class DoubleLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val) {
		let newNode = new Node(val)

		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.length++
		return this
	}

	pop() {
		if (!this.head) return null
		const removedNode = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = removedNode.prev
			this.tail.next = null
			removedNode.prev = null
		}
		this.length--
		return removedNode
	}

	shift() {
		if (!this.head) return null

		let removedNode = this.head
		if (this.length === 1) {
			this.head = null
			this.prev = null
		} else {
			this.head = removedNode.next
			this.head.prev = null
			removedNode.next = null
		}
		this.length--
		return removedNode
	}

	unshift(val) {
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}
		this.length++
		return this
	}

	get(index) {
		if (index < 0 || index > this.length) return null
		let currentNode, count
		if (index <= this.length / 2) {
			count = 0
			currentNode = this.head
			while (count !== index) {
				currentNode = currentNode.next
				count++
			}
		} else {
			count = this.length - 1
			currentNode = this.tail
			while (count !== index) {
				currentNode = currentNode.prev
				count--
			}
		}
		return currentNode
	}

	set(index, val) {
		const foundNode = this.get(index)
		if (foundNode !== null) {
			foundNode.val = val
			return true
		}
		return false
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return null
		if (index === this.length) return !!this.push(val)
		if (index === 0) return !!this.unshift(val)

		const newNode = new Node(val)
		const prevNode = this.get(index - 1)
		const afterNode = prevNode.next

		prevNode.next = newNode, newNode.prev = prevNode
		newNode.next = afterNode, afterNode.prev = newNode
		this.length++
		return this
	}

	remove(index) {
		if (index < 0 || index > this.length) return null
		if (index === this.length) return !!this.pop(val)
		if (index === 0) return !!this.shift(val)

		const removedNode = this.get(index)
		removedNode.prev.next = removedNode.next
		removedNode.next.prev = removedNode.prev
		this.length--
		
		removedNode.prev = null
		removedNode.next = null
		return removedNode
	}
}

module.exports = DoubleLinkedList