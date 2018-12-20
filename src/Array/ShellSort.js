const ShellSort = function () {
	const gaps = [701, 301, 132, 57, 23, 10, 4, 1]

	// Iterate over each gap
	for (let gap of gaps) {

		// Iterate from the current gap index to the end of the array
		for (let i = gap; i < this.data.length; i++){
			let insertIdx = i
			let gapValue = this.data[i]

			// Compare the current element (at insertIdx) with the current element minus the gap width
			// If the 'minus gap width' element is bigger, move the element up
			while(insertIdx >= gap && this.data[insertIdx - gap] > gapValue){
				this.data[insertIdx] = this.data[insertIdx - gap]
				insertIdx -= gap
			}

			this.data[insertIdx] = gapValue
		}
	}

	return this.data
}

module.exports = ShellSort