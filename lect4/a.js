const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req.url)
    console.log(`now methods will be printed`)
    console.log(req.method);
    console.log('now header will be printed')
    console.log(req.headers)
})

const PORT = 3001;

server.listen(PORT, ()=>{
    console.log(`server is running at : http://localhost:${PORT}`);
})