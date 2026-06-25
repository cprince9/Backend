//core module
// const http = require('http');


//External Module
const express = require('express');

//local module
const userRequestHandler = require('./user')

const app = express();

app.use((req, res, next)=>{
    console.log("Came in first middleware", req.url, req.method);
    next();
})

app.use((req, res, next)=>{
    console.log("Came in Second Middleware", req.url, req.method);
    res.send("Response from express server");
})

// const server = http.createServer(app)

const PORT = 3002;
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})