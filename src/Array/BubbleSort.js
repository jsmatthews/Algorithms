const BubbleSort = function() {
	// Iterate over each element from the end
	for(let i = this.data.length - 1; i >= 0; i--){

		// Iterate over each element from the ith element
		for(let j = i; j < this.data.length; j++){

			// If the current element is larger, replace it with the next element
			if(this.data[j] > this.data[j + 1]){
				this.swap(j, j + 1)
			}
		}
	}

	return this.data
}

module.exports = BubbleSort