// core Module
const path = require('path');

// external module
const express = require('express');

// local module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil')

const app = express();

// app.use('/', ()=>{})
    // or
// this both or same '/' no need to write this, this is default


app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);


// ordering is very important 
// agr esse(404 wale ko) app sbse upar lga doge to gadbad ho jayega(if you put this on line 14 are before it)
// app.use((req, res, next)=>{
//     res.status(404).sendFile(path.join(__dirname, "views", '404.html'));
// })
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, "views", '404.html'));
})


//  this sendFile is working with the relative path
// there a way to do this using absolute path

const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server is running at : http://localhost:${PORT}`);
})