const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if(req.url === '/' && req.method === 'GET'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcom to home</h1>');
        res.write('<h3>Enter Your Details:</h3>');

        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male" />');
        res.write('<label for="female">female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female" />');
        res.write('<br><input type="submit" value="Submit">');
        res.write('</form>');

        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url === '/products' && req.method === 'GET'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Check out these Products</h1></body>');
        res.write('</html>');
        return res.end();
    }
    // else if(req.url === '/submit-details' && req.method === 'POST'){
    //     res.setHeader('content-type', 'text/html');
    //     res.write(`
    //         <html>
    //         <head><title>Submission Successful</title></head>
    //         <body><h1>Thank you for submitting your details!</h1></body>
    //         </html>`
    //     );
    //     return res.end();
    // }
    else if(req.url === '/submit-details' && req.method === 'POST'){
        fs.writeFileSync('user.text', 'PRINCE');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    // if (req.url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
});

const PORT = 3000;  

server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
});