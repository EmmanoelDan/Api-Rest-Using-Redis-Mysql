const express = require('express');
const app = require('./app')

const server = express();

const port = process.env.PORT || 3000

server.use(app)

server.listen(port, () =>{
    console.log(`Server is Running ${port}`)
});
