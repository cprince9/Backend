const operation = (req, res) => {

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title>Calculator</title> </head>');
        res.write(`<body><h1>Welcome to Calculator Page<h1>
                    <a href='/calculator'>Go to Calculator</a></body>`);
        res.write('</html>');

        return res.end()
    }else if(req.url === '/calculator'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h2>Perform calculation</h2>');


        return res.end();
    }
}

module.exports = operation;