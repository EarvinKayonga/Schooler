/*
  Bubble sort
*/

"use start";

function bubble(list) {
  copy = list.slice();

  function swap(i, j, arr){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
  }

  for (var i = 0; i < copy.length; i++) {
    copy.forEach((number, left) => {
      right = left + 1
      if(number > copy[right])
        copy = swap(left, right, copy)
    });
  }

  return copy;
}

function bubbleEarlyTermination(list) {
  copy = list.slice();

  function swap(i, j, arr){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
  }

  for (var i = 0; i < copy.length; i++) {
    swapped = false
    copy.forEach((number, left) => {
      right = left + 1
      if(number > copy[right]) {
        copy = swap(left, right, copy)
        swapped = true
      }
    });
    if (!swapped) break;
  }

  return copy;
}

const list = [ 4, 3, 2, 1 ];
console.log(bubble(list));
console.log(bubbleEarlyTermination(list));
