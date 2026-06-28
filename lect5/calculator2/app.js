const http = require('http');
const operation = require('./operation')

const server = http.createServer(operation)


const PORT = 3001;

server.listen(PORT, ()=>{
    console.log(`server is running at : http://localhost:${PORT}`);
})