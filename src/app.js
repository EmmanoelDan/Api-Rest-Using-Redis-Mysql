const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
const bodyParser = require('body-parser')

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});
// middleware para mostrar corpo, rota e metodo http
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
