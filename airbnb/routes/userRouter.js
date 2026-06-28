// Core Module
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res, next)=>{
    // basically __dirname is pointing to current directory
    // ../ ek step phech aane ke liye
    // fir 'views' mei jao and views mei v home.html
    res.sendFile(path.join(__dirname, "../", "views", 'home.html'));
})

module.exports = userRouter;
