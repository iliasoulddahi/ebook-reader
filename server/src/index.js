if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}
const express = require('express');
const cors = require("cors");
const router = require('./routes');
const errorMiddleware = require("./middlewares/error.middleware");
const port = process.env.PORT || 4000
const app = express();

app .use(cors())
    .use(express.json())
    .use(express.urlencoded({extended:false}))
    .use(router)
    .use(errorMiddleware)

module.exports = { app, port }