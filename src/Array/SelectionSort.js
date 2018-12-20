const SelectionSort = function () {
	// Iterate over each element in the array
	for (let i = 0; i < this.data.length; i++) {
		let min = i
		
		// Iterate over the remaining unsorted elements in the array
		for (let j = i; j < this.data.length; j++) {
			if (this.data[j] < this.data[min]) {
				min = j
			}
		}

		// Swap the current element with the minimum
		this.swap(i, min)
	}

	return this.data
}

module.exports = SelectionSort