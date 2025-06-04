
require('dotenv').config();cd

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());



// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // your MySQL username
  password: 'p@ss9025196622',          // your MySQL password (leave blank if no password)
  database: 'people_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Routes

// Get all people
app.get('/people', (req, res) => {
  db.query('SELECT * FROM people', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get one person by ID
app.get('/people/:id', (req, res) => {
  db.query('SELECT * FROM people WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Add new person
app.post('/people', (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO people (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, name, email });
  });
});

// Update person
app.put('/people/:id', (req, res) => {
  const { name, email } = req.body;
  db.query('UPDATE people SET name = ?, email = ? WHERE id = ?', [name, email, req.params.id], (err) => {
    if (err) throw err;
    res.json({ id: req.params.id, name, email });
  });
});

// Delete person
app.delete('/people/:id', (req, res) => {
  db.query('DELETE FROM people WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Deleted successfully' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
