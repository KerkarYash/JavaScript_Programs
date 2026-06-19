let num = [1, 2, 3, 4]

let b = num.toString()  //b is now string

console.log(b)
console.log(b, typeof b)

console.log(num)
console.log(num, typeof num)

let c = num.join("_")
console.log(c, typeof c)

//Pop removes the last element form original array.

let r = num.pop()
console.log(num)  //gives updated array after popping out last element
console.log(r) //pop returns the last element

//push returns the new array length and adds the element at end.

let p = num.push(56)
console.log(num)
console.log(p)  //4

//shift removes the element from the start of the array and returns it.
let shifter = num.shift()
console.log(num)
console.log(shifter)

//

let unshifter = num.unshift()
console.log(unshifter)

//In array some methods modify the original array. and some methods return the new thing from array.
