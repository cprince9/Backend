const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    process.exit(); // process is an object (to stop the event loop)
    
})

const PORT = 3001;

server.listen(PORT, ()=>{
    console.log(`Server is running at : http://localhost:${PORT} `);
});