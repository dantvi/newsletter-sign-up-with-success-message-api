const express = require('express');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = knex({
  client: 'pg',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  }
});

app.get('/', (req, res) => { res.send('success') });
app.post('/register', (req, res) => { register.handleRegister(req, res, db) });

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
