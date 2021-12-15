const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const port = process.env.PORT || 3000;

//database connection
require('./config/db');
const user = require('./routes/user');

app.use(bodyParser.json(urlencoded({ extended: false })));

app.get('/', (req, res) => {
  res.json({ status: 'Health Check OK' });
});

app.use('/users', user);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
