const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  }),
);

app.use(express.json());

const personroutes = require('./routes/personRoutes');

app.use('/person', personroutes);

app.get('/', (req, res) => {
  res.json({ message: 'Oi Express!' });
});

const DB_USER = 'balta';
const DB_PASSWORD = encodeURIComponent('e296cd9f');
const DB_MONGODB = 'admin';

mongoose
  .connect(
    `mongodb://${DB_USER}:${DB_PASSWORD}@localhost:27017/${DB_MONGODB}`,
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!");
  })
  .catch((err) => console.log(err));

app.listen(3000, 'localhost');

