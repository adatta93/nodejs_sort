let selectionSortArr = [5, 1, 8, 4, 9, 6, 7, 2, 3];

function selection_sort(arr, startIndex, asc) {
  if (startIndex == arr.length - 1) {
    return arr;
  }
  let minMax = arr[startIndex];
  let minMaxIndex = startIndex;
  for (let i = startIndex + 1; i < arr.length; i++) {
    if (asc && arr[i] < minMax) {
      minMax = arr[i];
      minMaxIndex = i;
    } else if (!asc && arr[i] > minMax) {
      minMax = arr[i];
      minMaxIndex = i;
    }
  }
  let tmp = arr[startIndex];
  arr[startIndex] = arr[minMaxIndex];
  arr[minMaxIndex] = tmp;
  return selection_sort(arr, startIndex + 1, asc);
}

console.log("Ascending ", selection_sort(selectionSortArr, 0, true));
console.log("Descending ", selection_sort(selectionSortArr, 0, false));
