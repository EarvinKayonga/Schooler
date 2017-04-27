// Complexity nlogn

function mergeSort(list){
  if (list.length <= 1) return list;

  let middle = Math.floor(list.length / 2);
  let left = list.slice(0, middle);
  let right = list.slice(middle)

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let final = [];
  let rIndex, lIndex = 0;

  while (rIndex + lIndex < left.length + right.length){
    let rItem = right[rIndex];
    let lItem = left[lIndex];

    if(lItem == null){
      final.push(rItem);
      rIndex++;
    }
    else if(rItem == null) {
      final.push(lItem);
      lIndex++;
    }
    else if(lItem < rItem ) {
      final.push(lItem);
      lIndex++;
    } else {
      final.push(rItem);
      rIndex++;
    }
  }

  console.log(final);
  return final;
}

console.log(mergeSort([2, 13, -12, 340, -123, 3]));
