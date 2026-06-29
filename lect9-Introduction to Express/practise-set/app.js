// Core Module
const path = require('path');

// External Module
const express = require('express');
const bodyParser = require('body-parser');

// Local Module
const rootDir = require('./utils/pathUtils');
const homeRoute = require('./routes/homeroutes')
const contactRoute = require('./routes/contact-us')

const app = express();

// app.use(bodyParser.urlencoded());
app.use(express.urlencoded());
// order is important

app.use(homeRoute);
app.use(contactRoute);


app.use((req, res, next)=>{
  res.sendFile(path.join(rootDir, "views", "404.html"));
})





const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});