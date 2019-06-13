class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(val) {
		let newNode = new Node(val)

		if (this.root === null) {
			this.root = newNode
			return this
		}

		let currentNode = this.root
		while (true) {
			if (val === currentNode.val) return null
			if (val < currentNode.val) {
				if (currentNode.left === null) {
					currentNode.left = newNode
					return this
				}
				currentNode = currentNode.left
			} else {
				if (currentNode.right === null) {
					currentNode.right = newNode
					return this
				}
				currentNode = currentNode.right
			}
		}
	}

	find(val) {
		if (!this.root) return false
		let currentNode = this.root
		let found = false
		while (currentNode && !found) {
			if (val < currentNode.left) {
				currentNode = currentNode.left
			} else if (val > currentNode.value) {
				currentNode = currentNode.right
			} else {
				found = true
			}
		}
		if (!found) return null
		return currentNode
	}

	contains(val) {
		if (!this.root) return false
		let currentNode = this.root
		let found = false
		while (currentNode && !found) {
			if (val < currentNode.left) {
				currentNode = currentNode.left
			} else if (val > currentNode.value) {
				currentNode = currentNode.right
			} else {
				return true
			}
		}
		return false
	}

	rebalance(){
		
	}
}

module.exports = BinarySearchTree