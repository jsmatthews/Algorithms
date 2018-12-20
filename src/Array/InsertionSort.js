const InsertionSort = function () {
	// Iterate over each element
	for (let i = 0; i < this.data.length; i++) {
		let currentValue = this.data[i]
		let j = i - 1

		// Iterate from the current element to the start of the array
		// This is an iteration over the already sorted sub-array
		for (j; j >= 0 && this.data[j] > currentValue; j--) {
			this.data[j + 1] = this.data[j]
		}

		this.data[j + 1] = currentValue
	}

	return this.data
}

module.exports = InsertionSort