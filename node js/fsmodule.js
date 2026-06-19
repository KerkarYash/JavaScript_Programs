const fs = require('fs');

// fs.readFile('file.txt','utf8',(err, data)=>{ 
// readFile works on asynchronous non-blocking I/O model. It means it doesn't blocks the next lines of code. 
//     console.log(err,data);
// });

const a = fs.readFileSync('file.txt');  //node js intentionally blocks the next lines of codes
console.log(a);
console.log(a.toString())

console.log("Finished reading file");

// fs.writeFile('file2.txt',"This is a data",()=>{
//     console.log("Written to the file");
// })

b = fs.writeFileSync("file2.txt","This is a new data")
console.log(b);
console.log("Finished reading file")