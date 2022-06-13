let mergeSortArr = [1, 5, 8, 4, 9, 6, 7, 2, 3];

function merge_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  console.log("Left", left);
  console.log("Right", right);
  return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
  let finalArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      finalArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      finalArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  finalArr = finalArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
  console.log("Final", finalArr);
  return finalArr;
}

console.log(merge_sort(mergeSortArr));
