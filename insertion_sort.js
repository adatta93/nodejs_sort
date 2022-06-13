let insertionSortArr = [1, 5, 8, 4, 9, 6, 7, 2, 3];

function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    console.log("Key", key);
    while (j >= 0 && arr[j] > key) {
      console.log("J", arr[j]);
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    console.log("T", arr);
  }
  return arr;
}

console.log(insertion_sort(insertionSortArr));
