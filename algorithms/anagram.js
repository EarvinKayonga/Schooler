/*
  Check `Basarat Ali Syed`
  A word is an anagram of another if you can rearrange its charactiers to produce the second word.
  Given two strinfs determine if they are anagrams of each other
  Examples:
    earth heart
    silent listen
    foo  bar are not anagrams
 */
 /*
   Complexity at least n2 (with N the length of the words)
   We can qualify the implementation as 'naive'
 */

 "use strict";

 function areAnagram(first, second) {
   let permutations = (word) => {
     return []; // Heap's Algorithm
   }


   permutations(first).forEach((permutation) => {
       if (permutation === second) return true;
   });
   return false;
 }

 console.log(areAnagram("earth", "heart"));
 console.log(areAnagram("silent", "listen"));
 console.log(areAnagram("foo", "bar"));




 /*
   The Runtime Complexity of this implementation is held by the `sort` function which is
   log2(n)
 */

 function areAnagram(first, second) {
   let s1 = first.split('').sort().join('');
   let s2 = second.split('').sort().join('');

   return (s2 === s1);
 }

 console.log(areAnagram("earth", "heart"));
 console.log(areAnagram("silent", "listen"));
 console.log(areAnagram("foo", "bar"));




/*
  The Runtime Complexity of this implementation is N (we can just looping through the word)
*/

function areAnagram(first, second) {
  let counter = {};

  first.split('').forEach((letter) => {
    if (counter[letter])
      counter[letter]++;
    else
      counter[letter] = 1;
  });

  second.split('').forEach((letter) => {
    if(!counter[letter] && counter[letter] === undefined) return false;
    counter[letter]--;
  })

  return Object.keys(counter).every(val => counter[val] === 0);
}

console.log(areAnagram("earth", "heart"));
console.log(areAnagram("silent", "listen"));
console.log(areAnagram("foo", "bar"));
