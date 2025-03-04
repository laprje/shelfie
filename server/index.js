require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller')

const app = express();

massive(CONNECTION_STRING)
  .then(databaseConnection => {
    app.set("db", databaseConnection);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.createProduct)

app.delete('/api/inventory/:product_id', ctrl.deleteProduct)
app.put('/api/inventory/:product_id', ctrl.editProduct)
app.get('/api/inventory/:product_id', ctrl.oneProduct)


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}.`))