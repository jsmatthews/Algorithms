const BubbleSort = require('./BubbleSort')
const BiBubbleSort = require('./BiBubbleSort')
const SelectionSort = require('./SelectionSort')
const InsertionSort = require('./InsertionSort')
const QuickSort = require('./QuickSort')
const MergeSort = require('./MergeSort')
const RadixSort = require('./RadixSort')
const ShellSort = require('./ShellSort')
const CombSort = require('./CombSort')
const CountSort = require('./CountSort')

const CustomArray = function () {
	this.data = []

	this.swap = (left, right) => {
		const temp = this.data[left]
		this.data[left] = this.data[right]
		this.data[right] = temp
	}

	this.merge = (left, right) => {
		let leftIdx = 0
		let rightIdx = 0
		const results = []

		while (leftIdx < left.length || rightIdx < right.length) {
			if (left[leftIdx] < right[rightIdx] || rightIdx >= right.length) {
				results.push(left[leftIdx])
				leftIdx++
			} else {
				results.push(right[rightIdx])
				rightIdx++
			}
		}

		return results
	}

	this.pivot = (left, right) => {
		let pivotIdx = left
		let pivotVal = this.data[left]
		let currentIdx = left + 1

		while (currentIdx <= right) {
			if (pivotVal > this.data[currentIdx]) {
				pivotIdx++
				this.swap(pivotIdx, currentIdx)
			}

			currentIdx++
		}

		this.swap(left, pivotIdx)
		return pivotIdx
	}
}

CustomArray.prototype.bubbleSort = BubbleSort
CustomArray.prototype.biBubbleSort = BiBubbleSort
CustomArray.prototype.selectionSort = SelectionSort
CustomArray.prototype.insertionSort = InsertionSort
CustomArray.prototype.quickSort = QuickSort
CustomArray.prototype.mergeSort = MergeSort
CustomArray.prototype.radixSort = RadixSort
CustomArray.prototype.shellSort = ShellSort
CustomArray.prototype.combSort = CombSort
CustomArray.prototype.countSort = CountSort

module.exports = CustomArray