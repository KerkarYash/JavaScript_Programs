let marks = [92,34,45]

for (let i = 0; i < marks.length; i++){
  console.log(marks[i])
}

console.log("While loop:")

let i = 0

while(i < marks.length){
  console.log(marks[i])
  i++
}

console.log("Do while loop:")

let a = 0

do{
  console.log(marks[a])
  a++
}while(a < marks.length)