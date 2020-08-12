const express = require('express')
require('./db/mongoose')
const postRouter = require("../src/routers/post")

const app = express()

app.use(express.json())
app.use(postRouter)

module.exports = app