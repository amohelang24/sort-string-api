// Import Express
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("✅ API is running. Use POST /api/sort-string with JSON { data: 'example' }");
});

// POST endpoint
app.post("/api/sort-string", (req, res) => {
  const input = req.body.data;

  // Check if input exists
  if (!input || typeof input !== "string") {
    return res.status(400).json({ error: "Invalid or missing 'data' field" });
  }

  // Convert to array, sort, and return
  const sortedArray = input.split("").sort();
  res.json({ word: sortedArray });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
