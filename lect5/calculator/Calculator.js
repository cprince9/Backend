const http = require('http');
const calModule = require('./calModules');

const server = http.createServer( calModule)

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})