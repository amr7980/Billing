// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/billing', (req, res) => {
  console.log('Billing Info:', req.body);
  res.json({ message: 'Billing submitted successfully' });
});

app.post('/api/returns', (req, res) => {
  console.log('Return Request:', req.body);
  res.json({ message: 'Return received for product ID ' + req.body.id });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
