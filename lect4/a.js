const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req);
    res.end("HEY ADARSH!!");
})

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})