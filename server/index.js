require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env;
const ctrl = require('./controller')

const app = express();
app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}.`))