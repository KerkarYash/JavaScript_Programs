//Primitive data types in js.

let a = null;
let b = 4;
let c = false;
let d = BigInt("456") + BigInt("200");
let e = "Yash";
let f = Symbol("It's a symbol.");
let g;
console.log(a,b,c,d,e,f,g);

//Objects in js are non primitive datatypes. They are written in the form of key-value pairs. We can create a dictionary, item-price mapping. 

user = {
    name:"Yash",
    age:45,
    developer:true
}

console.log(user["developer"]);