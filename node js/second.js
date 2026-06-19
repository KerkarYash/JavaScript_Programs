(function(exports, require, module, __filename, __dirname){
    //whenever a particular module runs, before it node.js wraps that module inside this function. We don't do it explicity. Node.js does it automatically.

    //second.js is a Common JS module and we use its content in other files. 

//object

    user = {
        name: "Yash",
        age:15,
        language:"Marathi",
        developer:true
    }

    module.exports = user;
})   

console.log(exports, require, module, __filename, __dirname);