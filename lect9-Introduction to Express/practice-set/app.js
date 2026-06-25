const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log(req.url, req.method);
    next();
})

app.use((req, res, next)=>{
    console.log(req.url, req.method);
    next();
})

app.use((req, res, next)=>{
    res.send("Response From Express Server");
})

app.use('/', (req, res, next)=>{

})
app.use('constact-us', (req, res, next)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('
        <html>
        <head>
            <title>form</title>
        </head>
        <body>
            <h3>Enter your details</h3>
            <form action="/contact-us", method="POST">
                <input type="text" name="username" placeholder="Enter your name"><br><br>
                <input type="text" name="email" placeholder="Enter your email"><br><br>
            </form>
        </body>
        </html>

    ');
})

const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})