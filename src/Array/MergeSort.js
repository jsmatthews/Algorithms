const MergeSort = function (data = this.data) {
	if (data.length === 1) return data

	// Find the middle index of the array
	const middleIdx = Math.floor(data.length / 2)

	// Recursively call the mergeSort function with the left sub-array
	const left = this.mergeSort(data.slice(0, middleIdx))

	// Recursively call the mergeSort function with the right sub-array
	const right = this.mergeSort(data.slice(middleIdx))

	// Merge the left and right sub-arrays
	return this.merge(left, right)
}

module.exports = MergeSort