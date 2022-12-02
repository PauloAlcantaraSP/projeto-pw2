const express = require('express');
const app = express();

const routerCategoria = require('./route/route');

app.use(express.json());

app.use('/', routerCategoria);


app.listen(3000, ()=>{console.log('SERVIDOR RODANDO EM - http:localhost:3000')});

