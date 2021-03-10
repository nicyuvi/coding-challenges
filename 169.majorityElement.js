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
  // define half the total number of elements from our input array.
  let halfCount = nums.length / 2;

  // first check if there is only one input. if so, return the input.
  if (nums.length === 1) return nums[0];

  // loop through nums and declare a counter.
  for (let num of nums) {
    let counter = 0;
    // loop through nums a second time and compare the elements from both loops.
    for (let elem of nums) {
      // if the elements from both loops are the same value, we increment our counter.
      // this keeps track of the number of occurrences of each element in nums
      if (num === elem) counter++;
    }
    // once we count the number of occurences for the given element,
    // we check if the element occurs more than half the total number of elements from nums
    // if true, we can return that element
    if (counter > halfCount) return num;
  }
  // otherwise there is no majority element and we return -1;
  return -1;
}

// test case:
console.log(majorityElement1([3, 2, 3])); // 3
console.log(majorityElement1([4, 3, 3, 5])); // -1

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
  // define half the total number of elements from our input array.
  let halfCount = nums.length / 2;

  // declare our map.
  const map = {};

  // first check if there is only one input. If so, return the input.
  if (nums.length === 1) return nums[0];

  // loop through nums and see whether to add a key to map or increment a keys' value.
  // while we build our map, we check if our keys' value is greater than halfCount.
  // if so, we return that key.

  for (let num of nums) {
    // if num exists on map, increment its value.
    if (map.hasOwnProperty(num)) {
      map[num] += 1;
    } else {
      // otherwise we add a new key with initial value 1.
      map[num] = 1;
    }
    // here we check if our keys value is greater than halfCount.
    if (map[num] > halfCount) {
      // if so, we return the key.
      return num;
    }
    // otherwise, we continue the loop with the next element in nums.
  }
  // if there is no majority element in the input, we return -1.
  return -1;
}

// test case:
console.log(majorityElement2([3, 2, 3])); // 3
console.log(majorityElement2([4, 3, 3, 5])); // -1

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
  // define half the total number of elements from our input array.
  let halfCount = nums.length / 2;

  // declare our map.
  const map = {};

  // loop through nums and see whether to add a key to map or increment a keys' value.
  nums.forEach((num) => {
    // if num exists on map, increment it's value.
    if (map.hasOwnProperty(num)) {
      map[num] += 1;
    } else {
      // otherwise we add a new key with initial value 1.
      map[num] = 1;
    }
  });

  // loop through our maps' keys and evaluate which keys' value is greater than halfCount.
  for (let elem in map) {
    // if our keys' value is greater than halfCount, we return that key.
    if (map[elem] > halfCount) {
      return elem;
    }
  }
  // if there is no majority element in the input, we return -1.
  return -1;
}

// test case:
console.log(majorityElement3([3, 2, 3])); // 3
console.log(majorityElement3([4, 3, 3, 5])); // -1

// * Boyer Moore Algorithm
// * PSEUDOCODE
// * SOLUTION
