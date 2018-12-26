const CycleSort = function () {
	// Iterate over the array to find the cycles to rotate
	for (let cycle_start = 0; cycle_start < this.data.length - 1; cycle_start++) {
		let item = this.data[cycle_start]
		let pos = cycle_start

		// Find the position to put the item (count all smaller items to the right of it)
		for (let i = cycle_start + 1; i < this.data.length; i++) {
			if (this.data[i] < item) {
				pos++
			}
		}

		// If the item is already in the correct position
		if (pos === cycle_start) {
			continue
		}

		// Ignore duplicate elements
		while (this.data[pos] === item) {
			pos++
		}

		// Update item to the new pos
		if (pos !== cycle_start) {
			let temp = item
			item = this.data[pos]
			this.data[pos] = temp
		}

		// Find the correct position for the replaced (temp) item
		// by re-iterating through the array until the pos goes back
		// to the start of the cycle
		while (pos !== cycle_start) {
			pos = cycle_start

			// Find the position to put the item (count all smaller items to the right of it)
			for (let i = cycle_start + 1; i < this.data.length; i++) {
				if (this.data[i] < item) {
					pos++
				}
			}

			// Ignore duplicate elements
			while (this.data[pos] === item) {
				pos++
			}

			// Update item to the new pos
			if (this.data[pos] !== item) {
				let temp = item
				item = this.data[pos]
				this.data[pos] = temp
			}
		}
	}

	return this.data
}

module.exports = CycleSort