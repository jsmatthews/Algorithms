const QuickSort = function (data = this.data, left = 0, right = this.data.length - 1) {
	if (left < right) {
		// Call the pivot function to move all elements lower than
		// the pivot to the left of the pivot and return the pivot index
		let pivotIdx = this.pivot(left, right)

		// Recursively call the quickSort function of the left sub-array
		this.quickSort(data, left, pivotIdx - 1)

		// Recursively call the quickSort function of the right sub-array
		this.quickSort(data, pivotIdx + 1, right)
	}

	return data
}

module.exports = QuickSort