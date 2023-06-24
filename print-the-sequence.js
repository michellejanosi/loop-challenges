// Using a loop, write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

// create an array with the sequence and use a for loop to iterate through the array.
const arr = [4, 2.5, 1, -0.5, -2, -3.5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for loop starting with the largest number and decrementing by 1.5 until i is the smallest number.
for (let i = 4; i >= -3.5; i -= 1.5) {
  console.log(i);
}
