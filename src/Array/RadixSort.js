const RadixSort = function () {
	/**
	 * Get the maximum number of digits of the maximum element in the array
	 * @return {Integer} The max number of digits
	 */
	this.getMaxDigits = () => {
		return Math.floor(Math.log(Math.max(...this.data)) / Math.LN10 + 1)
	}

	/**
	 * Get the value of the number at the position
	 * @param {Integer} number
	 * @param {Integer} position
	 * @return {Integer} The value of the number at position
	 */
	this.getDigit = (number, position) => {
		return Math.floor((Math.abs(number) / Math.pow(10, position - 1)) % 10)
	}

	// Get the number of digits of the largest number in the array
	const maxDigits = this.getMaxDigits()

	// Loop for the max number of digits
	for (let i = 1; i <= maxDigits; i++) {
		let buckets = Array.from({ length: 10 }, () => [])

		// Put each element into their bucket
		for (let element of this.data) {
			let digit = this.getDigit(element, i)
			buckets[digit].push(element)
		}

		// Put the elements back into the array
		this.data = [].concat(...buckets)
	}

	return this.data
}

module.exports = RadixSort