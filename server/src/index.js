const express = require('express');
const cors = require("cors");
const router = require('./routes');
const port = process.env.PORT || 4000
const app = express();

app .use(cors())
    .use(express.json())
    .use(express.urlencoded({extended:false}))
    .use(router);

module.exports = { app, port }