// Core Module
const path = require('path');

// External Module
const express = require('express');

// Local Module
const rootDir = require('../utils/pathUtils')

const homeRoute = express.Router();


 

homeRoute.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(rootDir,'views', 'welcomeHome.html')); 
//   res.sendFile(path.join(__dirname, "views", 'welcomeHome.html'));
})

module.exports = homeRoute;