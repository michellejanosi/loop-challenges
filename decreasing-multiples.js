// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

// using a for loop with an if statement
for (let i = 100; i >= 0; i--) {
  if (i % 3 === 0) {
    console.log(i)
  };
}

// or initializing the counter to the nearest number divisible by 3.
for (let i = 99; i >= 0; i -= 3) {
  console.log(i);
}

// using a while loop
let i = 100;
while (i >= 0) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i--;
}
