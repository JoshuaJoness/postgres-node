const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const orderController = require('./controllers/orderController.ts');
const ordersController = require('./controllers/ordersController.ts');
const productsController = require('./controllers/productsController.ts');
const productController = require('./controllers/productController.ts');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(bodyParser.json());

// connect to db
const pg = require('pg');
const client = new pg.Client("postgres://wiotcsxq:JhIyE_1PXKRIiyogMZF5e2tlUiFoHz_R@fanny.db.elephantsql.com/wiotcsxq");
client.connect(function(err) {
    if (err) {
        return console.error('could not connect to postgres', err);
    }
    console.log('Client connected...')
    // client.end();
});

// routes
app.get('/', async (req, res) => { 
    productsController(req, res, client);
});

app.get('/orders', async (req, res) => { 
    ordersController(req, res, client);
});

app.post('/order', async (req, res) => {
    orderController(req, res, client);
});

app.get('/product/:id', async (req, res) => {
    productController(req, res, client);
})

app.listen(PORT, () => {
    console.log(`app is running on PORT:${PORT}`);
});