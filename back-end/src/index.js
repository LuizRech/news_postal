const express = require('express');
const cors = require('cors');

const app = express();

const route = require('./routes');
const connection = require('./database/connection');

app.use(cors());
app.use(express.json()); //Para o JS poder ler *PRECISA VIR ANTES DO ROUTE
app.use(route);
app.use(connection);

app.listen(3333);

module.exports = app;