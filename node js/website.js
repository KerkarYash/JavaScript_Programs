const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000; 

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url == '/'){
    res.end('<h1>This is Home Page.<p>Welcome to our Home Page. </p></h1>');
  }
  else if(req.url == '/about'){
    res.end('<h1>This is about page </h1>');
  }
  else if(req.url == '/hello'){
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
  }
  else{
    res.statusCode=404;
    res.end('<h1>Page was not found on server.</h1>')
  }

})

server.listen(port, ()=>{
  console.log(`Server is listening on port: ${port}`);
});
