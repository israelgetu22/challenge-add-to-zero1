// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:
let result = false;

for (let i = 0; i < array.length; i++) {
  for (let k = i + 1; k < array.length; k++) {
    console.log("i " + array[i] + " k " + array[k]);
    if (array[i] + array[k] === 0) {
      result = true;
    }
  }
}

console.log(result);
