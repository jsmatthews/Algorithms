const CountSort = function () {
	let min = this.data[0]
	let max = this.data[0]
	let count = []

	// Loop through the data to find the min / max
	for (let element of this.data) {
		if (element < min) {
			min = element
		}

		if (element > max) {
			max = element
		}
	}

	// Initialise the auxhiliary array
	for (let i = min; i <= max; i++) {
		count[i] = 0
	}

	// Count the elements
	for (let i = 0; i < this.data.length; i++) {
		count[this.data[i]] += 1
	}

	// Replace original array
	let j = 0
	for (let i = min; i <= max; i++) {
		while (count[i] > 0) {
			this.data[j] = i
			j++
			count[i]--
		}
	}

	return this.data
}

module.exports = CountSort