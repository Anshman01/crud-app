const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

let users = [];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
    role
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[userIndex] = { id, name, email, role };
  res.json(users[userIndex]);
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params; 
  const initialLength = users.length;
  users = users.filter(user => user.id !== id);

  if (users.length < initialLength) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
