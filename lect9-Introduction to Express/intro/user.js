const fs = require('fs');

const userRequestHandler = (req, res)=> {

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
    else if(req.url === '/submit-details' && req.method === 'POST'){

        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', ()=> {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);

            const params = new URLSearchParams(fullBody);

            // const bodyObject = {};
            // for(const [key, value] of params.entries()){
            //     bodyObject[key] = value;
            // }
            // console.log(bodyObject);
            const bodyObject = Object.fromEntries(params.entries());
            console.log(bodyObject);
            fs.writeFileSync('user.text', JSON.stringify(bodyObject));
        })
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    
    res.writeHead(204);
    return res.end();
};

module.exports = userRequestHandler;