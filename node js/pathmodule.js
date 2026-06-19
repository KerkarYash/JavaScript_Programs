const path = require('path');

const a = path.basename('C:\\temp\\myfile2.html');
const b = path.dirname('C:\\temp\\myfile2.html');
const c = path.extname('C:\\temp\\myfile2.html');
const d = path.extname(__filename);
console.log(a);
console.log(b)
console.log(c)
console.log(__filename, d)