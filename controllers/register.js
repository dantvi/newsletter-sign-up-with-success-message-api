
const handleRegister = (req, res, db) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json('invalid input');
  }

  db('users')
    .insert({
      email: email,
      joined: new Date()
    })
    .returning('*')
    .then(user => {
      res.json(user[0]);
    })
    .catch(err => res.status(400).json('unable to register user'));
};

module.exports = {
  handleRegister
};
