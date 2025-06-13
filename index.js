const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

app.post('/api/sort-string', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Input must be a string.' });
  }

  const sorted = data.split('').sort().join('');
  res.json({ word: sorted });
});

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
