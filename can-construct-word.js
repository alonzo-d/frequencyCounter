"use strict";

/** can we build first string w/ chars from second string; return boolean
 *
 * number of matching chars frequency needs to match
 * letters provided in second string need to be >= the number in first string
 * all chars all lowercase w/ no spaces or punc.
 *
 * input: two strings
 * output: boolean
 *
 *
 */
// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
  // set up helper function for the freqCounter
  function frequencyCounter(items) {
    let freqs = {};
    for (const item of items) {
      // const curr = freqs[item]++ || 1;
      const curr = freqs[item] || 0;
      freqs[item] = curr +1
      /* const curr = freqs[item] || 0
          freqs[item] = curr +1 */
    }
    return freqs;
  }

  // counter obj that holds all values from word string
  const wordObj = frequencyCounter(word);
  // counter obj2 that holds all values from letters string
  const lettersObj = frequencyCounter(letters);

  // compare word object value to word object value
  for (const key in wordObj) {
    const wordObjValue = wordObj[key];
    const lettersObjValue = lettersObj[key];

    // if letters value is greater than object value; continue
    if (lettersObjValue < wordObjValue) return false;
  }

  // return true
  return true;
}

canConstructWord('aa', 'abc');// complete
//   // false -- can't build "aa" with only 1 "a"

canConstructWord('abc', 'dcba'); // complete
//   // true -- can build "abc" with letters "abcd"

canConstructWord('aabb', 'bcabad'); // complete
// true -- can build "aabbcc" with those letters
