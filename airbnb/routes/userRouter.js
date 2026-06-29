// Core Module
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

// local Module
const rootDir = require('../utils/pathUtil')

userRouter.get('/', (req, res, next)=>{
    // how to include external html file into the express
    // basically __dirname is pointing to current directory
    // ../ ek step phech aane ke liye
    // fir 'views' mei jao and views mei v home.html
    res.sendFile(path.join(rootDir, "views", 'home.html'));
})

module.exports = userRouter;
