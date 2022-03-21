const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
const bodyParser = require('body-parser')

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(routes);

// Caso nenhuma rota da requisicao http nao estiver nos meus routes
app.use((req, res, next) =>{
    const erro = new Error('Nao encontrado')
    erro.status = (404);
    next(erro)
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    return res.send({
        erro:{
            message: error.message
        }
    })
})

module.exports = app;
