'use strict';

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
    // counter obj that holds all values from word string
    // counter obj2 that holds all values from letters string

    // compare both objects for same number of values
    
}

// canConstructWord('aa', 'abc');
//   // false -- can't build "aa" with only 1 "a"

// canConstructWord('abc', 'dcba');
//   // true -- can build "abc" with letters "abcd"

// canConstructWord('aabb', 'bcabad');
  // true -- can build "aabbcc" with those letters

