const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Practise</title></head>')
        res.write('<body>');
        res.write('<a href="/Men">Men</a><br>')
        res.write('<a href="/Women">Women</a><br>')
        res.write('<a href="/Kids">Kids</a><br>')
        res.write('<a href="/Cart">Cart</a><br>')
        res.write('</body>');
        res.write('</html>');

        return res.end();

    }
    else if(req.url === '/Men'){
        res.write('<h1>Men</h1>')

        return res.end();
    }
    else if(req.url === '/Women'){
        res.write('<h1>Women</h1>')

        return res.end();
    }
    else if(req.url === '/Kids'){
        res.write('<h1>Kids</h1>')

        return res.end();
    }
    else if(req.url === '/Cart'){
        res.write('<h1>Cart</h1>')

        return res.end();
    }
})

const PORT = 3001;

server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})