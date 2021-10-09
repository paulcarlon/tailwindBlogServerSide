const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('hello'));

app.post('/hello', (req, res) => res.send(`hello ${req.body.name}!`))

app.listen(8000, () => console.log('listening on port 8000'))