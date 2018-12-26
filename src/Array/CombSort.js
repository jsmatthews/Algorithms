const CombSort = function() {
	const SHRINK_FACTOR = 1.3
	let gap = this.data.length
	
	// Decrease the gap until it reaches 1
	while(gap !== 1){
		gap = (gap > 1) ? Math.floor(gap / SHRINK_FACTOR) : 1

		// Compare the element with the element at gap length away from it
		let i = 0
		while(gap + i < this.data.length){
			if(this.data[i] > this.data[i + gap]){
				this.swap(i, i + gap)
			}

			i++
		}
	}

	return this.data
}

module.exports = CombSort