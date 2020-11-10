const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session')

const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: 'sddaf-as1i23',
    resave: true,
    saveUninitialized: true
}));

const title = require('./routes/title');
const movement = require('./routes/movement');

app.use('/api/title', title);
app.use('/api/movement', movement);

mongoose
    .connect('mongodb://db:27017/billing', {
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.log(error);
    });

app.listen(3030, () => console.log('Server ativo na porta 3030'));