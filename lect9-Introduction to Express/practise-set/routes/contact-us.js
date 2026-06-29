// Core module
const path = require('path');

// External Module
const express = require('express');

// local Module
const rootDir = require('../utils/pathUtils')


const contactRoute = express.Router();


contactRoute.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", 'getContact_us.html'));
});

contactRoute.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", 'postContact_us.html'))
})

module.exports = contactRoute;