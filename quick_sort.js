let quickSortArr = [1, 5, 8, 4, 9, 6, 7, 2, 3];

function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log("Left ", left);
  console.log("Right ", right);
  console.log("Arr ", arr);
  return quick_sort(left).concat(pivot, quick_sort(right));
}

console.log(quick_sort(quickSortArr));
