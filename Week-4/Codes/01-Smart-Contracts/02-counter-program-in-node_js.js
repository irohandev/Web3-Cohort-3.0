/*
Same program of smart contract in ETH but now here its written in node.js http server
*/

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize count
let count = 0;

// Route to increment the count
app.post('/increment', (req, res) => {
  count += 1;
  res.json({ count });
});

// Route to decrement the count
app.post('/decrement', (req, res) => {
  if (count > 0) {
    count -= 1;
    res.json({ count });
  } else {
    res.status(400).json({ error: 'Count cannot be negative' });
  }
});

// Route to get the current count
app.get('/count', (req, res) => {
  res.json({ count });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
