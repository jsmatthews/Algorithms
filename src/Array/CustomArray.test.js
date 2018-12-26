const CustomArray = require('./CustomArray')

describe('CustomArray', () => {
	const customArray = new CustomArray()

	it('should have data', () => {
		expect(customArray.data).toEqual([])
	})

	it('should have a swap function', () => {
		expect(typeof customArray.swap).toEqual('function')
	})

	it('should have a merge function', () => {
		expect(typeof customArray.merge).toEqual('function')
	})

	it('should have a pivot function', () => {
		expect(typeof customArray.pivot).toEqual('function')
	})

	it('should have a mergeSort function', () => {
		expect(typeof customArray.mergeSort).toEqual('function')
	})
})

describe('Sort', () => {
	let customArray

	beforeEach(() => {
		customArray = new CustomArray()
		customArray.data = [123, 456, 789, 0, 50, 344, 23, 56, 42, 3]
	})

	it('should bubbleSort an array', () => {
		const sortedArray = customArray.bubbleSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})

	it('should biBubbleSort an array', () => {
		const sortedArray = customArray.biBubbleSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})

	it('should selectionSort an array', () => {
		const sortedArray = customArray.selectionSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})

	it('should insertionSort an array', () => {
		const sortedArray = customArray.insertionSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})

	it('should quickSort an array', () => {
		const sortedArray = customArray.quickSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})

	it('should mergeSort an array', () => {
		const sortedArray = customArray.mergeSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})

	it('should radixSort an array', () => {
		const sortedArray = customArray.radixSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})

	it('should shellSort an array', () => {
		const sortedArray = customArray.shellSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})

	it('should combSort an array', () => {
		const sortedArray = customArray.combSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})

	it('should countSort an array', () => {
		const sortedArray = customArray.countSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})

	it('should cycleSort an array', () => {
		const sortedArray = customArray.cycleSort()
		expect(sortedArray).toEqual([0, 3, 23, 42, 50, 56, 123, 344, 456, 789])
	})
})