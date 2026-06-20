//1. Returning first character

// function firstChar(s){
//   return s[0]
// }

// let result = firstChar("Umesh")
// console.log(result)

//2. String reverse

// function reverse(s){
//   return s.split('').reverse().join('')
// }

// let result = reverse("Hello")
// console.log(result)

//3. Vowels

// vowels = "aeiou"

// function countVowels(s){

//   let count = 0

//   for(let ch of s){
//     if(vowels.includes(ch)){
//       count++;
//     }
//   }

//   return count;

// }

// let result = countVowels("Aarushi")
// console.log(result)

//4. Largest number in array


// function largest(s){

//   let max_value = s[0]

//   for(let i = 0; i < s.length; i++){
//     if(s[i] > max_value){
//       max_value = s[i];
//     }
//   }

//   return max_value

// }

// let result = largest([23, 45, 28, 12, 83, 25])
// console.log(result)

//5. Sum of array

// let sum = 0

// let arr = [1,2,4,5,6]

// for(let num of arr){
//   sum +=num
// }

// console.log(sum)


//6. Palindrome string

// function isPalindrome(s){
//   return s === s.split('').reverse().join('')
// }

// const result = isPalindrome("madan")

// console.log(result)

//7. Count frequency of character

// function frequency(s){
//   let map = {}

//   for(let ch of s){
//      map[ch] = (map[ch] || 0)+1
//   }

//   return map
// }

// const result = frequency("aarushi")
// console.log(result)

//8. Remove duplicates

// let num = [1,2,1,3,3,2,4,5,4]

// let uniqueNumbers = [...new Set(num)]

// console.log(uniqueNumbers)

//9 Factorial

function fact(n){
  if(n<0){
    return "Undefined for negative numbers."
  }
  if(n === 0 || n === 1){
    return 1
  }

  return n * fact(n-1)
}

const result = fact(5)
console.log(result)