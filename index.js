// Import the Express library
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define the port to listen on (use the environment variable PORT or default to 10000)
const port = process.env.PORT || 10000;

// Middleware to automatically parse incoming JSON requests
app.use(express.json());

// Define a POST endpoint at /api/sort-string
app.post('/api/sort-string', (req, res) => {
  // Destructure 'data' from the request body
  const { data } = req.body;

  // Check if the input is a string; if not, return a 400 error
  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Input must be a string.' });
  }

  // Split the string into characters and sort them alphabetically
  const sortedChars = data.split('').sort();

  // Return the sorted characters as a JSON response
  res.json({ word: sortedChars });
});

// Start the server and log a message when it’s running
app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
