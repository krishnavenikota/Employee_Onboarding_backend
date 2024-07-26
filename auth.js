const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'clpsecret@22'; 

app.use(bodyParser.json());


const users = [
  {
    id: 1,
    username: 'user1',
    password: 'password1',
    role: 'admin',
    mentor: false,
    access: [],
  },
  {
    id: 2,
    username: 'user2',
    password: 'password2',
    role: 'employee',
    mentor: true,
    mentee: 'employee3',
    access: [],
  },
  {
    id: 2,
    username: 'user3',
    password: 'password3',
    role: 'employee',
    mentor: false,
    mentee: undefined,
    access: [],
  },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
        access: user.access,
      },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
