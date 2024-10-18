const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const database = {
  users: [
    {
      id: '1',
      email: 'john@gmail.com',
      joined: new Date()
    },
    {
      id: '2',
      email: 'ann@gmail.com',
      joined: new Date()
    }
  ]
}

app.get('/users', (req, res) => {
  res.send(database.users);
});

app.post('/register', (req, res) => {
  const { email } = req.body;
  database.users.push({
    id: database.users.length + 1,
    email: email,
    joined: new Date()
  });
  res.json(database.users[database.users.length - 1]);
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
