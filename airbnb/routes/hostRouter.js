// core module
const path = require('path');

const express = require('express');
const hostRouter = express.Router();

hostRouter.get('/host/add-home', (req, res, next)=>{
    res.sendFile(path.join(__dirname, "../", "views", 'addHome.html'));
    // res.send(`<h1>Register Your Home Here : </h1>
    //         <form action="/host/add-home" method="POST">
    //             <input type="text" name="houseName" placeholder="Enter the name of your house" />
    //             <input type="submit" />
    //         </form>
    //     `);
})

hostRouter.post('/host/add-home', (req, res, next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname, "../", "views", 'homeAdded.html'));
    
})


module.exports = hostRouter;