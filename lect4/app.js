const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcom to home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url === '/products'){
        res.setHeader('Content-Type', 'html'); //setHeader is used to tell the browser which type of response(data) we are going to send(example json, html);
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Check out these Products</h1></body>');
        res.write('</html>');
        return res.end();
    }


    // if none of the routes matches then this will be executed
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;  

server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
});