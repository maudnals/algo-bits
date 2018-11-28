const unsortedArray = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const unsortedArrayWeird = [9, 2, 8, 5, 6, 1, 4, 3, 7, 10, 1, 8];

//--------------------
// Bubble sort (comparison, in-place)
//--------------------

function swap(arr, i, j) {
  // swap in-place
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

// Version 1: inefficient
const bubbleSort_1 = arr => {
  // i itself is not directly used as array index; it's only used as counter to do the pass n times.
  // Why n times? In the worst case where the smallest value is on the rightmost (last) index: we will need to do the swap n times, so that the small value will bubble down until the first array index.
  for (let i = 0; i < arr.length; i++) {
    // 1 pass
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
// But... the problem is: maybe two passes are enough to sort the array, if it's not too unsorted! Solution: stop after the first pass where no swap is needed. Because if no swap is needed, it means the array is already sorted.

// Version 2: more efficient
function bubbleSort_2(arr) {
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      // i replaces inner loops (equivalent of j in bubbleSort_1)
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        arr = swap(arr, i, i + 1);
      }
    }
  } while (swapped);
  return arr;
}

// console.log(bubbleSort_1([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
// console.log(bubbleSort_1([9, 2, 8, 5, 6, 1, 4, 3, 7, 10, 1, 8]));
// console.log(bubbleSort_2([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
// console.log(bubbleSort_2([9, 2, 8, 5, 6, 1, 4, 3, 7, 10, 1, 8]));

//--------------------
// Selection sort (comparison-based)
//--------------------

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    subArr = arr.slice(i);
    min = Math.min(...subArr);
    minIndex = i + subArr.indexOf(min);
    arr = swap(arr, i, minIndex);
  }
  return arr;
}

// console.log(selectionSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
// console.log(selectionSort([9, 2, 8, 5, 6, 1, 4, 3, 7, 10, 1, 8]));

//--------------------
// Insertion sort
//--------------------

// console.log(iSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));

// *** How to break out of a for loop? Use return? NO: return will really returns out of the function!!!!
// *** How to break out of a for loop? Don't use a for loop, use while instead

function qs(arr) {
  let lesser = [];
  let greater = [];
  let pivot = arr[0];
}
