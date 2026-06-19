let marks = [91, 82, 73, 84, null, false, "Not Present"]
console.log(marks)
console.log(marks[3])
console.log(marks[7])
console.log(`Length of array is ${marks.length}`)

marks[7]=89 // adding a value into the array

console.log(marks[7])  

marks[0]=96
console.log(marks[0]) //changing the value of an array.

//Arrays are mutable. Arrays can be changed. strings are immutable. Stings cannot be changed.

console.log(typeof marks); //object  (Array is an object)

