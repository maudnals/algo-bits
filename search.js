// ---------------------------------------------
// Binary search
// ---------------------------------------------
// Find a target number in a SORTED array

function searchBinary(targetNum, nums) {
  let floorIndex = 0;
  let ceilingIndex = nums.length - 1; 
  while (ceilingIndex - floorIndex > 0) {
    const currentIndex = floorIndex + Math.floor((ceilingIndex - floorIndex)/2);
    const currentNum = nums[currentIndex];
    if (currentNum === targetNum) {
      return currentNum;
    }
    if (currentNum < targetNum) {
      floorIndex = currentIndex;
    } else {
      ceilingIndex = currentIndex;
    }
  }
  return false;
}

// worst case runtime is O(log2(n))



// ---------------------------------------------
// Merge sort
// ---------------------------------------------

function sortMerge(nums) {

  
}

