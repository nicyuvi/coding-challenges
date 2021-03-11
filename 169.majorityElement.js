// * Brute Force

// * Pseudocode:
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

// * Solution:
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

// test cases:
console.log('Solution 1: ', majorityElement1([3, 2, 3])); // Solution 1: 3
console.log('Solution 1: ', majorityElement1([4, 3, 3, 5])); // Solution 1: -1

// * HashMap - One Loop

// * Pseudocode:
// define half the total number of elements from our input array.

// declare our map.

// first check if there is only one input. if so, return the input.

// loop through nums and see whether to add a key to map or increment a keys' value:
// while we build our map, we check if our keys' value is greater than halfCount:
// if so, we return that key.

// if there is no majority element in the input, we return -1.

// * Solution:
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

// test cases:
console.log('Solution 2: ', majorityElement2([3, 2, 3])); // Solution 2: 3
console.log('Solution 2: ', majorityElement2([4, 3, 3, 5])); // Solution 2: -1

// * HashMap - Two Loops

// * Pseudocode:
// define half the total number of elements from our input array .

// declare our map.

// loop through nums and see whether to add a key to map or increment a keys' value:
// if num exists on map, increment it's value.
// otherwise we add a new key with initial value 1.

// loop through our maps' keys and evaluate which keys' value is greater than halfCount:
// if our keys' value is greater than halfCount, we return that key.

// if there is no majority element in the input, we return -1.

// * Solution:
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

// test cases:
console.log('Solution 3: ', majorityElement3([3, 2, 3])); // Solution 3: 3
console.log('Solution 3: ', majorityElement3([4, 3, 3, 5])); // Solution 3: -1

// * Boyer-Moore Algorithm

// * Pseudocode
// initialize the first element as the candidate with count 1
// loop through nums starting at index 1 to check the rest of the elements
// if elem === candidate, we increment count
// otherwise decrement count
// check if count === 0, this means there are is current majority element candidate
// if so, assign the current elem to be candidate and set count to 1
// at the end of the loop, return candidate
// this is our majority element, assuming there is one from the given input

// * Solution - One Loop
function majorityElement4(nums) {
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
}

// test cases:
console.log('Solution 4: ', majorityElement4([3, 2, 3])); // Solution 4: 3
console.log('Solution 4: ', majorityElement4([4, 3, 3, 5])); // Solution 4: 3
// ! in this case we would have to loop through a second time to check if 3 is actually a majority element.

// ? The problem states that we may assume that the majority element always exists in the array
// ! IF NOT:
// ? we can loop through again to check if candidate is actually a majority element

// * Check if the candidate is actually a majority element

// * Pseudocode
// initialize our count at 0
// we loop through our input and check if each element === candidate
// if so, we increment count
// we check if count is greater than half the total number of elements from our input array
// if so, our candidate is a majority element
// if no, our candidate is not a majority element

// * Solution
function isMajorityElem(nums, candidate) {
  let halfCount = nums.length / 2;
  let count = 0;
  for (let elem of nums) {
    if (elem === candidate) count++;
    if (count > halfCount) return true;
  }
  return false;
}

// test cases:
console.log('Is candidate a majority element?', isMajorityElem([3, 2, 3], 3)); // true
console.log(
  'Is candidate a majority element?',
  isMajorityElem([4, 3, 3, 5], 3),
); // false

// * Boyer-Moore Algorithm Two Loops Solution:

function majorityElement5(nums) {
  let candidate = nums[0];
  let count = 1;

  let halfCount = nums.length / 2;
  let checkCount = 0;

  for (let i = 1; i < nums.length; i++) {
    let elem = nums[i];
    count += elem === candidate ? 1 : -1;

    if (count === 0) {
      candidate = elem;
      count = 1;
    }
  }

  for (let elem of nums) {
    if (elem === candidate) checkCount++;
    if (checkCount > halfCount) return candidate;
  }
  return -1;
}

// test cases:
console.log('Solution 5: ', majorityElement5([3, 2, 3])); // Solution 4: 3
console.log('Solution 5: ', majorityElement5([4, 3, 3, 5])); // Solution 4: -1
// * here our solution correctly prints out -1 to signify there is no majority element
