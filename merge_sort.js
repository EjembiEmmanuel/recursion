function mergeSort(arr) {
  var length = arr.length;

  if (length <= 1) {
    return;
  }

  var middle = Math.floor(length / 2);
  var leftArray = arr.slice(0, middle);
  var rightArray = arr.slice(middle);

  mergeSort(leftArray);
  mergeSort(rightArray);

  return merge(leftArray, rightArray, arr);
}

function merge(leftArray, rightArray, arr) {
  var leftSize = leftArray.length;
  var rightSize = rightArray.length;

  var i = 0;
  var l = 0;
  var r = 0;

  while (l < leftSize && r < rightSize) {
    if (leftArray[l] < rightArray[r]) {
      arr[i] = leftArray[l];
      i++;
      l++;
    } else {
      arr[i] = rightArray[r];
      i++;
      r++;
    }
  }

  while (l < leftSize) {
    arr[i] = leftArray[l];
    i++;
    l++;
  }

  while (r < rightSize) {
    arr[i] = rightArray[r];
    i++;
    r++;
  }

  return arr;
}

var array = [5, 2, 1, 4, 3];

console.log(mergeSort(array));
