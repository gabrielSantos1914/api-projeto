const express = require('express');

const app = express();

const citiesRoute = require('./routes/citiesRoute')
const clientsRoute = require('./routes/clientsRoute');
const carriersRoute = require('./routes/carriersRoute');
const deliveriesRoute = require('./routes/deliveriesRoute');
const orders_itensRoute = require('./routes/orders_itensRoute')
const ordersRoute = require('./routes/ordersRoute');
const productsRoute = require('./routes/productsRoute');
const statesRoute = require('./routes/statesRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/carriers', carriersRoute);
app.use('/cities', citiesRoute);
app.use('/clients', clientsRoute);
app.use('/deliveries', deliveriesRoute);
app.use('/orders_itens',orders_itensRoute);
app.use('/orders', ordersRoute);
app.use('/products', productsRoute);
app.use('/states',statesRoute)


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


