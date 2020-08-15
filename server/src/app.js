const express = require('express')
const path = require("path")
//const cors = require("cors");
require('./db/mongoose')
const postRouter = require("../src/routers/post")

const app = express()

const corsOptions = {
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
    origin: 'localhost:3000'
}

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/../../client/build/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../../client/build/index.html'));
});

app.use(express.json())
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
})
app.use(postRouter)



module.exports = app