require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require("./routes");

const { server } = require('typescript');

const app = express();
server.use(cors())
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api', routes);

server.listen(process.env.PORT, ()=>{
    console.log('servidor rodando em: http://localhost: ${process.env.PORT}');

})
