const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

app.post('/api/sort-string', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Input must be a string.' });
  }

  // Step 3 & 4: convert to array of characters and sort
  const sortedChars = data.split('').sort();

  // Step 5: return the sorted characters as an array in JSON
  res.json({ word: sortedChars });
});

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
