/*
  A palindrome is a string that reads the same forward and backward,
  for example, radar, toot, and madam
*/

function isPalindrome(word) {
  let reversed = word.split('').reverse.join('');
  return reversed === word;
}

/*
   a function to check if any permutation of a given string is a palindrome.
*/

/*
  Complexity n!
*/
function isAnyPermutation(word) {
  permutations(word).forEach((permut) => {
    if (isPalindrome(permut)) return true;
  });
}

/*
  Complexity n
*/
function isAnyPermutation(word) {
  let counter = {};
  word.split('').forEach((letter) => {
    if (counter[letter])
      delete counter[letter];
    else
      counter[letter] = true;
  });

  return Object.keys(counter).length <= 1;
}

console.log(isAnyPermutation('radar'));
console.log(isAnyPermutation('toot'));
console.log(isAnyPermutation('tttot'));
console.log(isAnyPermutation('mmada'));
console.log(isAnyPermutation('and'));
