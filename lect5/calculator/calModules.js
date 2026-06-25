
const calModule = (req, res) => {

    if(req.url === '/' && req.method === 'GET'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body><h1>Welcome to Calculator</h1>');
        res.write('<a href="/calculator"><h3>Go To Calculator page </h3</a>')
        return res.end();
    }
    else if(req.url === '/calculator' && req.method === 'GET'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body><h1>Calculator Page</h1>');
        res.write('<form action="/calculate-result" method="POST">');
        res.write('<input type="number" name="num1" placeholder="Enter first number"><br>');
        res.write('<input type="number" name="num2" placeholder="Enter second number"><br>');
        res.write('<input type="submit" value="Calculate">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
        
    }
    else if(req.url === '/calculate-result' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        })
        req.on('end', ()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            console.log(params);
            const num1 = Number(params.get('num1'));
            const num2 = Number(params.get('num2'));
            const result = num1 + num2;
            res.setHeader('Content-Type', 'text/html');
             res.write(`
                <html>
                    <head><title>Result</title></head>
                    <body>
                        <h1>Result</h1>
                        <p>${num1} + ${num2} = <b>${result}</b></p>
                        <a href="/calculator">Back</a>
                    </body>
                </html>
            `);
            res.end();
        });
        return;
    }

    res.writeHead(204);
    return res.end();
}

module.exports = calModule;