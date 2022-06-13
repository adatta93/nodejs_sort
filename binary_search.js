let binarySearchArr = [];
let item = 0;
while (item < 10) {
  binarySearchArr.push(item);
  item++;
}
console.log("Init Arr ", binarySearchArr);

let searchTerm = 2,
  low = 0,
  high = binarySearchArr.length - 1,
  mid = Math.floor((low + high) / 2);

function binary_search(low, high, mid) {
  console.log({ low, high, mid });
  if (binarySearchArr[mid] == searchTerm) {
    console.log("Found");
    return;
  } else if (searchTerm < binarySearchArr[mid]) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
  mid = Math.floor((low + high) / 2);
  binary_search(low, high, mid);
}

binary_search(low, high, mid);
