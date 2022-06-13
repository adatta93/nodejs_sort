let bubbleSortArray = [5, 3, 1, 4, 7];

function bubble_sort_loop(arr, desc) {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (desc && arr[j] < arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      } else if (!desc && arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

console.log("Descending ", bubble_sort_loop(bubbleSortArray, true));
console.log("Ascending ", bubble_sort_loop(bubbleSortArray, false));

function bubble_sort_recursion(arr, arrLength, desc) {
  if (arrLength == 0) {
    return arr;
  }
  for (let i = 0; i < arrLength; i++) {
    if (desc && arr[i] < arr[i + 1]) {
      let tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;
    } else if (!desc && arr[i] > arr[i + 1]) {
      let tmp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = tmp;
    }
  }
  return bubble_sort_recursion(arr, arrLength - 1, desc);
}

console.log(
  "Descending Recursive ",
  bubble_sort_recursion(bubbleSortArray, bubbleSortArray.length, true)
);
console.log(
  "Ascending Recursive ",
  bubble_sort_recursion(bubbleSortArray, bubbleSortArray.length, false)
);
