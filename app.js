const express = require('express');

const app = express(); 

 const clientsRoute = require('./routes/clientsRoute')

app.use(express.json()) 
app.use(express.urlencoded({extended: false}))

app.use('/clients', clientsRoute);

                                                                    
app.use((req, res, next) => {
    const erro = new Error('rota não encontrada.') 
    erro.status = 404; 
    next(erro) 
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {  
        message: error.message
        }
    })
    })

    
module.exports = app;


