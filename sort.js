const unsortedArray = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const unsortedArrayWeird = [9, 2, 8, 5, 6, 1, 4, 3, 7, 10, 1, 8];

//--------------------
// Bubble sort
// keywords: comparison, in-place, "swap neighbours"
// complexity: worst O(n2)
//--------------------

function swapInPlace(arr, i, j) {
  // swap in-place
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Version 1: inefficient
const bubbleSort_1 = arr => {
  const len = arr.length;
  // i itself is not directly used as array index; it's only used as counter to do the pass n times.
  // Why n times? In the worst case where the smallest value is on the rightmost (last) index: we will need to do the swap n times, so that the small value will bubble down until the first array index.
  for (let i = 0; i < len; i++) {
    // 1 pass
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapInPlace(arr, j, j + 1);
      }
    }
  }
  return arr;
};
// But... the problem is: maybe two passes are enough to sort the array, if it's not too unsorted! Solution: stop after the first pass where no swap is needed. Because if no swap is needed, it means the array is already sorted.

// Version 2: more efficient
function bubbleSort_2(arr) {
  const len = arr.length;
  let swapped = false;
  do {
    // reinitialize the "swapped" value
    swapped = false;
    for (let i = 0; i < len; i++) {
      // i replaces inner loops (equivalent of j in bubbleSort_1)
      if (arr[i] > arr[i + 1]) {
        swapInPlace(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort_2([...unsortedArray]));
console.log(bubbleSort_2([...unsortedArrayWeird]));

//--------------------
// Insertion sort
// keywords: comparison, in-place, "scan to get min, and move it leftmost"
// worst: O(n2)
//--------------------

const insertionSort = arr => {
  const len = arr.length;
  // gotcha: can start at 1
  for (let i = 1; i < len; i++) {
    const toInsert = arr[i];
    let insertionIndex = i - 1;
    while (arr[insertionIndex] > toInsert) {
      // don't move anything, simply find the right insertion index
      insertionIndex--;
    }
    if (insertionIndex < 0) {
      insertionIndex = 0;
    }
    arr[insertionIndex] = toInsert;
    console.log("*", toInsert);
    console.log(insertionIndex);
    console.log("----");
  }
  return arr;
};

//--------------------
// Selection sort (comparison, in-place, "scan subArray and swap")
//--------------------

// const selectionSort = arr => {
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     subArr = arr.slice(i);
//     min = Math.min(...subArr);
//     // gotcha: minIndex of array based on subArray
//     minIndex = i + subArr.indexOf(min);
//     swapInPlace(arr, i, minIndex);
//   }
//   return arr;
// };

// console.log(selectionSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
// console.log(selectionSort([9, 2, 8, 5, 6, 1, 4, 3, 7, 10, 1, 8]));

// console.log(insertionSort([9, 2, 5, 6, 4, 6, 3, 7, 10, 1, 8]));

// *** How to break out of a for loop? Use return? NO: return will really returns out of the function!!!!
// *** How to break out of a for loop? Don't use a for loop, use while instead
