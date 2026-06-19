const http = require('http');

const port = process.env.PORT || 3000; //using the port our processing is getting. 
//this is where we mentioning, where the node application should listen, on which port it should listen. 

const server = http.createServer((req,res)=>{
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html') //Setting the header as Content-Type, so that request is server as an HTML and it won't get served as a plain text. 

  res.end('<h1>Hii i am Yash <p>This is the way to learn things. </p></h1>')
})

server.listen(port, ()=>{
  console.log(`Server is listening on port: ${port}`)
});
