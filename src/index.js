const express = require('express');

const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//passando constante app para ter acesso na camada controller clientes
require('./controllers/clientesController')(app);

app.listen(3000);
