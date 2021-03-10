// * Brute Force

// * PSEUDOCODE:
// define half the total number of elements from our input array.

// first check if there is only one input. if so, return the input.

// loop through nums and declare a counter:

// loop through nums a second time and compare the elements from both loops:

// if the elements from both loops are the same value, we increment our counter.
// this keeps track of the number of occurrences of each element in nums

// once we count the number of occurrences for the given element,
// we check if the element occurs more than half the total number of elements from nums

// if true, we can return that element

// otherwise there is no majority element and we return -1;

// * SOLUTION:
function majorityElement1(nums) {
  let halfCount = nums.length / 2;

  if (nums.length === 1) return nums[0];

  for (let num of nums) {
    let counter = 0;
    for (let elem of nums) {
      if (num === elem) counter++;
    }
    if (counter > halfCount) return num;
  }
  return -1;
}

// test case:
console.log('Solution 1: ', majorityElement1([3, 2, 3])); // Solution 1: 3
console.log('Solution 1: ', majorityElement1([4, 3, 3, 5])); // Solution 1: -1

// * HashMap - One Loop

// * PSEUDOCODE:
// define half the total number of elements from our input array.

// declare our map.

// first check if there is only one input. if so, return the input.

// loop through nums and see whether to add a key to map or increment a keys' value:
// while we build our map, we check if our keys' value is greater than halfCount:
// if so, we return that key.

// if there is no majority element in the input, we return -1.

// * SOLUTION:
function majorityElement2(nums) {
  let halfCount = nums.length / 2;

  const map = {};

  if (nums.length === 1) return nums[0];

  for (let num of nums) {
    if (map.hasOwnProperty(num)) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
    if (map[num] > halfCount) {
      return num;
    }
  }
  return -1;
}

// test case:
console.log('Solution 2: ', majorityElement2([3, 2, 3])); // Solution 2: 3
console.log('Solution 2: ', majorityElement2([4, 3, 3, 5])); // Solution 2: -1

// * HashMap - Two Loops

// * PSEUDOCODE:
// define half the total number of elements from our input array .

// declare our map.

// loop through nums and see whether to add a key to map or increment a keys' value:
// if num exists on map, increment it's value.
// otherwise we add a new key with initial value 1.

// loop through our maps' keys and evaluate which keys' value is greater than halfCount:
// if our keys' value is greater than halfCount, we return that key.

// if there is no majority element in the input, we return -1.

// * SOLUTION:
function majorityElement3(nums) {
  let halfCount = nums.length / 2;

  const map = {};

  nums.forEach((num) => {
    if (map.hasOwnProperty(num)) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  });

  for (let elem in map) {
    if (map[elem] > halfCount) {
      return elem;
    }
  }
  return -1;
}

// test case:
console.log('Solution 3: ', majorityElement3([3, 2, 3])); // Solution 3: 3
console.log('Solution 3: ', majorityElement3([4, 3, 3, 5])); // Solution 3: -1

// * Boyer Moore Algorithm

// * PSEUDOCODE
// initialize the first element as the candidate with count 1
// loop through nums starting at index 1 to check the rest of the elements
// if elem === candidate, we increment count
// otherwise decrement count
// check if count === 0, this means there are is current majority element candidate
// if so, assign the current elem to be candidate and set count to 1
// at the end of the loop, return candidate
// this is our majority element, assuming there is one from the given input

// * SOLUTION
var majorityElement4 = function (nums) {
  let candidate = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    let elem = nums[i];
    count += elem === candidate ? 1 : -1;

    if (count === 0) {
      candidate = elem;
      count = 1;
    }
  }
  return candidate;
};

// ? The problem states that we may assume that the majority element always exists in the array
// ! IF NOT:
// ? we can loop through again to check if candidate is actually a majority element

// test case:
console.log('Solution 4: ', majorityElement4([3, 2, 3])); // Solution 4: 3
console.log('Solution 4: ', majorityElement4([4, 3, 3, 5])); // Solution 4: 3
