const GnomeSort = function () {
	let i = 0

	// Keep iterating until an element of lower value is found
	// then bubble sort that element until it reaches the correct position
	while(i < this.data.length){
		if(i === 0 || this.data[i] >= this.data[i - 1]){
			i++
		} else {
			this.swap(i, i - 1)
			i--
		}
	}

	return this.data
}

module.exports = GnomeSort
