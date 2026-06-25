const http = require('http');
const userRequirement = require('./module');

const server = http.createServer(userRequirement);

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}`);
});