// server/index.js
const express = require('express');
const db = require('./db');

const app = express();
const port = 5000;

app.use(express.json());

// Fetch all devices
app.get('/devices', (req, res) => {
  db.query('SELECT * FROM devices', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update a device
app.put('/devices/:id', (req, res) => {
  const { id } = req.params;
  const { name, ipAddress } = req.body;

  db.query('UPDATE devices SET name=?, ip_address=? WHERE id=?', [name, ipAddress, id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
