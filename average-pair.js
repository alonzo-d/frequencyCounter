"use strict";

/** 
 * taking two args, one is an array of numbers, other is numeric value,
 * if numeric value is equal to the average of any two numbers in nums array,
 * return true.
 * 
 * 
 */
// add whatever parameters you deem necessary & write docstring
function averagePair(nums, targetAvg) {
    // init two variables, one starts at beg. of array, other end of array
    let lowerBound = 0;
    let upperBound = nums.length - 1;

    // while lower bound is less than greater bound, check if average of those
    while(lowerBound < upperBound) {
        let average = (nums[lowerBound] + nums[upperBound]) / 2;

        // values is equall to targetAvg
        if (average === targetAvg) {
            return true;
        } else if (average > targetAvg) {
            upperBound--;
        } else {
            lowerBound++;
        }

        
    }
    
    // if average is greater than target decrement upperbound by one, else
    // increment lower bound by one.

    return false;
}

averagePair([1, 2, 3], 2.5);         // true
averagePair([3, 3, 6, 12, 19], 8);   // false
averagePair([1, 2, 3], 2);           // true
averagePair([], 4);                  // false
