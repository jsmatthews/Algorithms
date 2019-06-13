const BinarySearchTree = require('./BinarySearchTree')

describe.skip('BinarySearchTree', () => {
	let binarySearchTree = new BinarySearchTree()

	beforeEach(() => {
		binarySearchTree = new BinarySearchTree()
	})

	it('INSERT: should insert data into the binarySearchTree', () => {
		binarySearchTree.insert(5)
		binarySearchTree.insert(3)
		binarySearchTree.insert(2)
		binarySearchTree.insert(1)
		binarySearchTree.insert(4)
		binarySearchTree.insert(8)
		binarySearchTree.insert(7)
		binarySearchTree.insert(6)
		binarySearchTree.insert(10)
		binarySearchTree.insert(9)
		expect(binarySearchTree.root.left.val).toEqual(3)
	})

})