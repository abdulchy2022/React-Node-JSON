
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 8000;


app.use(cors()); // no data will displayed in frontend if u don't use CORS 
app.get('/api/products', (req, res) => {
  fs.readFile(path.join(__dirname, 'product.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading product data' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
