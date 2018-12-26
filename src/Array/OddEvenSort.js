const OddEvenSort = function () {
	let sorted = false

	while (!sorted) {
		let even = 0
		let odd = 1
		sorted = true

		// Iterate through the data comparing the odd and even elements
		while (even < this.data.length && odd <= this.data.length) {
			if (this.data[even] > this.data[even + 1]) {
				this.swap(even, even + 1)
				sorted = false
			}

			if (this.data[odd] > this.data[odd + 1]) {
				this.swap(odd, odd + 1)
				sorted = false
			}

			even += 2
			odd += 2
		}
	}

	return this.data
}

module.exports = OddEvenSort
