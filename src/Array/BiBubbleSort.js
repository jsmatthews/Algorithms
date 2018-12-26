const BiBubbleSort = function () {
	let i
	let j
	let iMax = this.data.length
	let jMax = 0

	// Loop through the array until the two ends converge in the middle
	while (iMax !== jMax) {
		i = jMax
		j = iMax

		// Bubbleup the maximum of the unsorted array to the end
		// Bubbledown the minimum of the unsorted array to the start
		while (i < iMax && j >= jMax) {
			if (this.data[i] > this.data[i + 1]) {
				this.swap(i, i + 1)
			}

			if (this.data[j] < this.data[j - 1]) {
				this.swap(j, j - 1)
			}

			i++
			j--
		}

		iMax--
		jMax++
	}

	return this.data
}

module.exports = BiBubbleSort